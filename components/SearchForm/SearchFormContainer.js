import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchForm } from "./SearchForm";
import { PropTypes } from "prop-types";

import cred from "./config";
export class SearchFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            query: null,
            data: null
        };
    }

    updateQuery(newQuery) {
        this.setState({
            query: newQuery
        });
    }
    getOfficialData() {
        fetch(cred.url + this.state.query)
            .then(response => response.json())
            .then(json => console.log(json));
    }
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
