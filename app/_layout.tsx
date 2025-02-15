import {Stack} from "expo-router";
import {store} from "../store/store";
import {Provider} from "react-redux";

function RootLayout() {
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
            </Stack>
        </Provider>
    );
}

export default RootLayout;