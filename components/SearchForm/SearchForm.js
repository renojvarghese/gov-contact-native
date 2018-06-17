import React, { Component } from "react";
import { AppRegistry, TextInput, Button, View } from "react-native";
export class SearchForm extends Component {
    render() {
        return (
            <View>
                <TextInput
                    placeholder="Please enter your address"
                    onChangeText={this.props.onChangeText}
                />
                <Button title="Search" onPress={this.props.onSubmit} />
            </View>
        );
    }
}
AppRegistry.registerComponent("SearchForm", () => AppRegistry);
