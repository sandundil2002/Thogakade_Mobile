import {styles} from "../../styles/styles";
import {Button, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {ItemModel} from "../../models/itemModel";
import {AppDispatch, RootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {addItem, deleteItem, updateItem} from "../../store/slices/ItemSlice";

function Item() {
    const dispatch = useDispatch<AppDispatch>();
    const items = useSelector((state: RootState) => state.item.items);
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [quantity, setQuantity] = useState<string>("");
    const [selectedItem, setSelectedItem] = useState<ItemModel | null>(null);

    const generateItemId = (): string => {
        const nextId = items.length + 1;
        return `I${String(nextId).padStart(3, "0")}`;
    }

    const handleSave = () => {
        if (!name || !price || !quantity) {
            alert("Please fill in all fields");
            return;
        }

        const newItem: ItemModel = {
            id: generateItemId(),
            name,
            price,
            quantity,
        };

        dispatch(addItem(newItem));
        alert("Item Saved Successfully");
        setName("");
        setPrice("");
        setQuantity("");
    };

    const handleUpdate = () => {
        if (!selectedItem) {
            alert("No item selected for update");
            return;
        }

        if (!name || !price || !quantity) {
            alert("Please fill in all fields");
            return;
        }

        const modifyItem: ItemModel = {
            id: selectedItem.id,
            name,
            price,
            quantity,
        }

        dispatch(updateItem(modifyItem));
        alert("Item Updated Successfully");
        setName("");
        setPrice("");
        setQuantity("");
    };

    const handleDelete = () => {
        if (!selectedItem) {
            alert("No item selected for delete");
            return;
        }

        dispatch(deleteItem(selectedItem.id));
        alert("Item Deleted Successfully");
        setName("");
        setPrice("");
        setQuantity("");
    };

    const handleRowClick = (item: ItemModel) => {
        setSelectedItem(item);
        setName(item.name);
        setPrice(item.price);
        setQuantity(item.quantity);
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Item Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Item Price"
                    value={price}
                    onChangeText={setPrice}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Item Quantity"
                    value={quantity}
                    onChangeText={setQuantity}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Add" onPress={() => {handleSave()}} />
                <Button title="Update" onPress={() => {handleUpdate()}} />
                <Button title="Delete" onPress={() => {handleDelete()}} />
            </View>

            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Id</Text>
                <Text style={styles.tableHeaderText}>Name</Text>
                <Text style={styles.tableHeaderText}>Price</Text>
                <Text style={styles.tableHeaderText}>Quantity</Text>
            </View>

            {items.map((item) => (
                <View style={styles.tableRow} key={item.id} onTouchEnd={() => handleRowClick(item)}>
                    <Text style={styles.tableCell}>{item.id}</Text>
                    <Text style={styles.tableCell}>{item.name}</Text>
                    <Text style={styles.tableCell}>{item.price}</Text>
                    <Text style={styles.tableCell}>{item.quantity}</Text>
                </View>
            ))}
        </View>
    );
}

export default Item;