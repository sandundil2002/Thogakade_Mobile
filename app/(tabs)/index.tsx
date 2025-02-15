import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { styles } from "../../styles/styles";

interface InventoryStatusWidgetProps {
    items: { id: string; name: string; quantity: string }[];
}

function Index() {
    const customers = useSelector((state: RootState) => state.customer.customers);
    const items = useSelector((state: RootState) => state.item.items);
    const orders = useSelector((state: RootState) => state.order.orders);

    const totalCustomers = customers.length;
    const totalItems = items.length;
    const totalOrders = orders.length;

    const recentOrders = orders.slice(0, 5);

    const MetricCard = ({ title, value }: { title: string; value: number }) => (
        <View style={styles.metricCard}>
            <Text style={styles.metricTitle}>{title}</Text>
            <Text style={styles.metricValue}>{value}</Text>
        </View>
    );

    const OrderItem = ({ orderId, customerId, totalPrice }: { orderId: string; customerId: string; totalPrice: number }) => (
        <View style={styles.orderItem}>
            <Text>Order ID: {orderId}</Text>
            <Text>Customer ID: {customerId}</Text>
            <Text>Items: {items.map((item) => item.name).join(", ")}</Text>
            <Text>Total Price: ${totalPrice.toFixed(2)}</Text>
        </View>
    );

    const InventoryStatusWidget = ({ items }: InventoryStatusWidgetProps) => {
        const lowStockItems = items.filter((item) => Number(item.quantity) <= 10);

        return (
            <View style={styles.widgetContainer}>
                <Text style={styles.sectionTitle}>Inventory Status</Text>
                {lowStockItems.length > 0 ? (
                    <FlatList
                        data={lowStockItems}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Text style={styles.inventoryItem}>
                                {item.name} - Stock: {item.quantity}
                            </Text>
                        )}
                    />
                ) : (
                    <Text style={styles.noDataText}>All items are well-stocked!</Text>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.metricsContainer}>
                <MetricCard title="Customers" value={totalCustomers} />
                <MetricCard title="Items" value={totalItems} />
                <MetricCard title="Orders" value={totalOrders} />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recent Orders</Text>
                {recentOrders.length > 0 ? (
                    <FlatList
                        data={recentOrders}
                        keyExtractor={(order) => order.id}
                        renderItem={({ item }) => (
                            <OrderItem
                                orderId={item.id}
                                customerId={item.customerId}
                                totalPrice={item.totalPrice}
                            />
                        )}
                    />
                ) : (
                    <Text style={styles.noDataText}>No recent orders.</Text>
                )}
            </View>

            <InventoryStatusWidget items={items} />
        </View>
    );
}

export default Index;