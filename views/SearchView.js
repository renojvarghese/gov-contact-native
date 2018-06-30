import React from "react";
import { View,Text } from "react-native";
import SearchForm from "../components/SearchForm/SearchForm";
import OfficialsContainer from "../components/OfficialsDisplay/OfficialsContainer";

export const SearchView = () => {
    return (
        <View>
            <SearchForm/>
            <OfficialsContainer/>
        </View>
    )
}
