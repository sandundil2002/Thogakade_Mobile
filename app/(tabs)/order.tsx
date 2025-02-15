import React, { useState } from "react";
import {View, Text, Button, TextInput, Alert, FlatList, TouchableOpacity} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../../styles/styles";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {addOrder} from "../../store/slices/OrderSlice";
import {CartModel} from "../../models/cartModel";
import {OrderModel} from "../../models/orderModel";

function Order() {
    const dispatch = useDispatch<AppDispatch>();
    const orders = useSelector((state: RootState) => state.order.orders);
    const customers = useSelector((state: RootState) => state.customer.customers);
    const items = useSelector((state: RootState) => state.item.items);

    const [selectedCustomerId, setSelectedCustomerId] = useState<string>("");
    const [selectedItemId, setSelectedItemId] = useState<string>("");
    const [itemQuantity, setItemQuantity] = useState<string>("1");
    const [cart, setCart] = useState<CartModel[]>([]);

    const selectedItem = items.find((item) => item.id === selectedItemId);
    const totalOrderPrice = cart.reduce((total, item) => total + item.totalPrice, 0);

    const handleAddToCart = () => {
        if (!selectedItem) {
            Alert.alert("Validation", "Please select an item");
            return;
        }
        const quantity = parseInt(itemQuantity);
        if (isNaN(quantity) || quantity <= 0) {
            Alert.alert("Validation", "Please enter a valid quantity");
            return;
        }
        const totalPrice = Number(selectedItem.price) * quantity;

        const existingIndex = cart.findIndex((cartItem) => cartItem.id === selectedItem.id);
        if (existingIndex >= 0) {
            const updatedCart = [...cart];
            updatedCart[existingIndex].quantity += quantity;
            updatedCart[existingIndex].totalPrice =
                updatedCart[existingIndex].quantity * updatedCart[existingIndex].unitPrice;
            setCart(updatedCart);
        } else {
            const newCartItem = {
                id: selectedItem.id,
                name: selectedItem.name,
                unitPrice: Number(selectedItem.price),
                quantity,
                totalPrice,
            };
            setCart([...cart, newCartItem]);
        }
        setSelectedItemId("");
        setItemQuantity("1");
    };

    const handleRemoveFromCart = (itemId: string) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const generateOrderId = (): string => {
        const nextId = orders.length + 1;
        return `O${String(nextId).padStart(3, "0")}`;
    };

    const handlePlaceOrder = () => {
        if (!selectedCustomerId) {
            Alert.alert("Validation", "Please select a customer");
            return;
        }
        if (cart.length === 0) {
            Alert.alert("Validation", "Your cart is empty");
            return;
        }

        const newOrder: OrderModel = {
            id: generateOrderId(),
            customerId: selectedCustomerId,
            items: cart,
            totalPrice: totalOrderPrice,
        };

        dispatch(addOrder(newOrder));
        Alert.alert(
            "Order Placed",
            `Order for customer ${selectedCustomerId} has been placed.\nTotal: $${totalOrderPrice.toFixed(2)}`
        );

        setSelectedCustomerId("");
        setCart([]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select Customer:</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedCustomerId}
                    onValueChange={(value) => setSelectedCustomerId(value)}
                >
                    <Picker.Item label="Select Customer" value="" />
                    {customers.map((customer) => (
                        <Picker.Item key={customer.id} label={customer.name} value={customer.id} />
                    ))}
                </Picker>
            </View>

            <Text style={styles.label}>Select Item:</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedItemId}
                    onValueChange={(value) => setSelectedItemId(value)}
                >
                    <Picker.Item label="Select Item" value="" />
                    {items.map((item) => (
                        <Picker.Item
                            key={item.id}
                            label={`${item.name} - $${item.price}`}
                            value={item.id}
                        />
                    ))}
                </Picker>
            </View>

            {selectedItem && (
                <View>
                    <Text style={styles.label}>Enter Quantity:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={itemQuantity}
                        onChangeText={setItemQuantity}
                        keyboardType="numeric"
                    />
                    <Text style={styles.infoText}>
                        Price per unit: ${selectedItem.price} | Subtotal: $
                        {(Number(selectedItem.price) * parseInt(itemQuantity || "0")).toFixed(2)}
                    </Text>
                    <Button title="Add to Cart" onPress={handleAddToCart} />
                </View>
            )}

            <Text style={[styles.header, { marginTop: 20 }]}>Cart</Text>
            {cart.length === 0 ? (
                <Text style={styles.infoText}>Your cart is empty.</Text>
            ) : (
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)} style={styles.cartItem}>
                            <Text style={styles.tableCell}>
                                {item.name} | Qty: {item.quantity} | Total: ${item.totalPrice.toFixed(2)}
                            </Text>
                            <Text style={styles.removeText}>Remove</Text>
                        </TouchableOpacity>
                    )}
                />
            )}

            <Text style={styles.infoText}>Total Order Price: ${totalOrderPrice.toFixed(2)}</Text>

            <View style={{ marginTop: 20 }}>
                <Button title="Place Order" onPress={handlePlaceOrder} />
            </View>
        </View>
    );
}

export default Order;