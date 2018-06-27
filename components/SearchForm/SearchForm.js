import React, { Component } from "react";
import { AppRegistry, TextInput, Button, View } from "react-native";
import { connect } from "react-redux";
import { url, API_KEY } from "./config";
import { fetchOfficialData } from "./SearchFormActions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchForm = ({ dispatch }) => {
    let input = "";
    return (
        <GooglePlacesAutocomplete
            placeholder="Enter an address"
            minLength={2}
            returnKeyType={"search"}
            fetchDetails={true}
            onPress={(data, details = null) => {
                fetchOfficialData(dispatch, url + data.description);
            }}
            renderDescription={row => row.description}
            query={{
                key: API_KEY,
                language: "en"
            }}
            currentLocation={true}
            currentLocationLabel="Current location"
            debounce={200}
            styles={{
                textInputContainer: {
                    backgroundColor: "rgba(0,0,0,0)",
                    borderTopWidth: 0,
                    borderBottomWidth: 0
                },
                textInput: {
                    marginLeft: 0,
                    marginRight: 0,
                    height: 38,
                    color: "#5d5d5d",
                    fontSize: 16
                },
                listView: {
                    backgroundColor: "#d048e3",
                    position: "absolute",
                    top: 50,
                    height: 100
                },
                predefinedPlacesDescription: {
                    color: "#1faadb"
                }
            }}
        />
    );
};

export default connect()(SearchForm);
