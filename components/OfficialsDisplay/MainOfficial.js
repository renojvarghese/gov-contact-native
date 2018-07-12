import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Image } from "react-native";

const MainOfficial = () => {
    return (
        <View>
            <Text>Main Official</Text>
        </View>
    )
}

const mapStateToProps({ state }) =>
{
    return {
        mainOfficial: state.mainOfficial
    }
}
export default connect(mapStateToProps)(mainOfficial)
