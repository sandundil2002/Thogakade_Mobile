import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "Dashboard",
                    title: "Dashboard",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 26,
                        fontWeight: "bold",
                        color: "#007AFF",
                    },
                    tabBarIcon: () => <Ionicons name="home" size={24} color="#007AFF" />,
                }}
            />

            <Tabs.Screen
                name="customer"
                options={{
                    headerTitle: "Customer Section",
                    title: "Customers",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 26,
                        fontWeight: "bold",
                        color: "#007AFF",
                    },
                    tabBarIcon: () => <Ionicons name="people" size={24} color="#007AFF" />,
                }}
            />

            <Tabs.Screen
                name="item"
                options={{
                    headerTitle: "Item Section",
                    title: "Items",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 26,
                        fontWeight: "bold",
                        color: "#007AFF",
                    },
                    tabBarIcon: () => <Ionicons name="pricetags-sharp" size={24} color="#007AFF" />,
                }}
            />

            <Tabs.Screen
                name="order"
                options={{
                    headerTitle: "Order Section",
                    title: "Orders",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 26,
                        fontWeight: "bold",
                        color: "#007AFF",
                    },
                    tabBarIcon: () => <Ionicons name="receipt" size={24} color="#007AFF" />,
                }}
            />
        </Tabs>
    );
}

export default TabLayout;