import React from "react";
import { StyleSheet, Text, View, ScrollView, AppRegistry } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { officialReducer } from "./reducers/reducers";
import { SearchView } from "./views/SearchView";
import { MainOfficialView } from "./views/MainOfficialView";

const store = createStore(officialReducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ScrollView contentContainerStyle={styles.container}>
                    <MainOfficialView/>
                </ScrollView>
            </Provider>
        );
    }
}
// AppRegistry.registerComponent('SearchForm'. () => SearchForm);
const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        backgroundColor: "#fed03a",
        display: "flex",
        flexDirection: "column",
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
