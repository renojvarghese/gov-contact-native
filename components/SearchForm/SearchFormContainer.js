import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchForm } from "./SearchForm";
// import { PropTypes } from 'prop-types';
// import cred from './config';
// const API_KEY = cred.key;
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
        console.log(newQuery);
        this.setState({
            query: newQuery
        });
    }
    getOfficialData() {
        console.log(cred.url);
        fetch(cred.url + this.state.query)
            .then(response => response.json())
            .then(json => console.log(json));
    }
    render() {
        console.log("HELLO");
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
