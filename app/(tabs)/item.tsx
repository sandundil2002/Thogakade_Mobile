import {styles} from "../../styles/styles";
import {Button, Text, TextInput, View} from "react-native";

function Item() {
    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Item Name"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Item Price"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Item Quantity"
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Add" onPress={() => {}} />
                <Button title="Update" onPress={() => {}} />
                <Button title="Delete" onPress={() => {}} />
            </View>

            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Id</Text>
                <Text style={styles.tableHeaderText}>Name</Text>
                <Text style={styles.tableHeaderText}>Price</Text>
                <Text style={styles.tableHeaderText}>Quantity</Text>
            </View>
        </View>
    );
}

export default Item;