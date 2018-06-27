import React from "react";
import { StyleSheet, Text, View, ScrollView, AppRegistry } from "react-native";
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
                <ScrollView contentContainerStyle={styles.container}>
                    <SearchForm />
                    <OfficialsContainer officials={officials} />
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
