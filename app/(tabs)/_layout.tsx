import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#007AFF",
                tabBarInactiveTintColor: "#999",
                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopWidth: 1,
                    borderTopColor: "#ddd",
                },
            }}
        >
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
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="home"
                            size={24}
                            color={focused ? "#007AFF" : "#999"}
                        />
                    ),
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
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="people"
                            size={24}
                            color={focused ? "#007AFF" : "#999"}
                        />
                    ),
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
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="pricetags-sharp"
                            size={24}
                            color={focused ? "#007AFF" : "#999"}
                        />
                    ),
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
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="receipt"
                            size={24}
                            color={focused ? "#007AFF" : "#999"}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

export default TabLayout;