import React, { useState } from "react";
import {styles} from "../../styles/styles";
import {TextInput, View, Button, Text, Alert} from "react-native";

interface Customer {
    id: string;
    name: string;
    address: string;
    mobile: string;
}

function Customer() {
    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [mobile, setMobile] = useState<string>("");
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    const generateCustomerId = (): string => {
        const nextId = customers.length + 1;
        return `C${String(nextId).padStart(3, "0")}`;
    };

    const handleSave = () => {
        if (!name || !address || !mobile) {
            alert("Please fill in all fields");
            return;
        }

        const newCustomer: Customer = {
            id: generateCustomerId(),
            name,
            address,
            mobile,
        };

        setCustomers([...customers, newCustomer]);
        alert("Customer Saved Successfully");
        setName("");
        setAddress("");
        setMobile("");
    };

    const handleUpdate = () => {
        if (!selectedCustomer) {
            Alert.alert("Error", "No customer selected for update");
            return;
        }

        if (!name || !address || !mobile) {
            Alert.alert("Error", "Please fill in all fields");
            return;
        }

        const updatedCustomers = customers.map((customer) =>
            customer.id === selectedCustomer.id ? { ...customer, name, address, mobile } : customer
        );

        setCustomers(updatedCustomers);
        alert("Customer Updated Successfully");
        setName("");
        setAddress("");
        setMobile("");
        setSelectedCustomer(null);
    };

    const handleDelete = () => {
        if (!selectedCustomer) {
            Alert.alert("Error", "No customer selected for deletion");
            return;
        }

        const updatedCustomers = customers.filter((customer) => customer.id !== selectedCustomer.id);

        setCustomers(updatedCustomers);
        alert("Customer Deleted Successfully");
        setName("");
        setAddress("");
        setMobile("");
        setSelectedCustomer(null);
    };

    const handleRowClick = (customer: Customer) => {
        setSelectedCustomer(customer);
        setName(customer.name);
        setAddress(customer.address);
        setMobile(customer.mobile);
    };

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Customer Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Customer Address"
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Mobile"
                    value={mobile}
                    onChangeText={(text) => setMobile(text)}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Add" onPress={handleSave} />
                <Button title="Update" onPress={handleUpdate} />
                <Button title="Delete" onPress={handleDelete} />
            </View>

            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Id</Text>
                <Text style={styles.tableHeaderText}>Name</Text>
                <Text style={styles.tableHeaderText}>Address</Text>
                <Text style={styles.tableHeaderText}>Mobile</Text>
            </View>

            {customers.map((customer, index) => (
                <View key={index} style={[styles.tableRow, selectedCustomer?.id === customer.id && styles.selectedRow,]}
                    onTouchStart={() => handleRowClick(customer)}>
                    <Text style={styles.tableCell}>{customer.id}</Text>
                    <Text style={styles.tableCell}>{customer.name}</Text>
                    <Text style={styles.tableCell}>{customer.address}</Text>
                    <Text style={styles.tableCell}>{customer.mobile}</Text>
                </View>
            ))}
        </View>
    );
}

export default Customer;