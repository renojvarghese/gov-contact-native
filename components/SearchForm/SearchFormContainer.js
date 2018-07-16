import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchForm } from "./SearchForm";
import { PropTypes } from "prop-types";

import cred from "./config";
export class SearchFormContainer extends Component {
    render() {
        return (
            <View>
                <SearchForm
                    onChangeText={this.updateQuery.bind(this)}
                    onSubmit={this.getOfficialData.bind(this)}
                />
            </View>
        );
    }
}
