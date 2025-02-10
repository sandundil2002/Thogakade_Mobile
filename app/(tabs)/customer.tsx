import {TextInput, View, Button} from "react-native";
import {styles} from "../../styles/styles";

function Customer() {
    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.textInput} placeholder="Customer Name"/>
                <TextInput style={styles.textInput}  placeholder="Customer Address"/>
                <TextInput style={styles.textInput}  placeholder="Mobile"/>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Save" onPress={() => {}}/>
                <Button title="Update" onPress={() => {}}/>
                <Button title="Delete" onPress={() => {}}/>
            </View>

        </View>
    );
}

export default Customer;