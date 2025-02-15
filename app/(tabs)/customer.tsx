import React, { useState } from "react";
import {styles} from "../../styles/styles";
import {TextInput, View, Button, Text, Alert} from "react-native";
import {CustomerModel} from "../../models/customerModel";
import {AppDispatch, RootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {addCustomer, deleteCustomer, updateCustomer} from "../../store/slices/CustomerSlice";

function Customer() {
    const dispatch = useDispatch<AppDispatch>();
    const customers = useSelector((state: RootState) => state.customer.customers);
    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [mobile, setMobile] = useState<string>("");
    const [selectedCustomer, setSelectedCustomer] = useState<CustomerModel | null>(null);

    const generateCustomerId = (): string => {
        const nextId = customers.length + 1;
        return `C${String(nextId).padStart(3, "0")}`;
    };

    const handleSave = () => {
        if (!name || !address || !mobile) {
            alert("Please fill in all fields");
            return;
        }

        const newCustomer: CustomerModel = {
            id: generateCustomerId(),
            name,
            address,
            mobile,
        };

        dispatch(addCustomer(newCustomer));
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

        const modifyCustomer: CustomerModel = {
            id: selectedCustomer.id,
            name,
            address,
            mobile,
        }


        dispatch(updateCustomer(modifyCustomer));
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

        dispatch(deleteCustomer(selectedCustomer.id));
        alert("Customer Deleted Successfully");
        setName("");
        setAddress("");
        setMobile("");
        setSelectedCustomer(null);
    };

    const handleRowClick = (customer: CustomerModel) => {
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