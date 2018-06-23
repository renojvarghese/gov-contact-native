import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { officialReducer } from "./reducers/reducers";
import SearchForm from "./components/SearchForm/SearchForm";
import OfficialsContainer from "./components/OfficialsDisplay/OfficialsContainer";
const officials = [
    {
        name: "Obama",
        officeName: "Former President"
    }
];

const store = createStore(officialReducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <SearchForm />
                    <OfficialsContainer officials={officials} />
                </View>
            </Provider>
        );
    }
}
// AppRegistry.registerComponent('SearchForm'. () => SearchForm);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fed03a",
        alignItems: "center",
        justifyContent: "center"
    },
    textStyle: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 30
    }
});
