import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Official } from "./Official";

import { StyleSheet, Text, View, ScrollView } from "react-native";

const displayOfficials = officials => {
    return officials.map((official, index) => {
        return <Official key={"official_" + index} official={official} />;
    });
};
const mapStateToProps = state => ({
    officials: state.officials
});

const OfficialsContainer = ({ officials, dispatch }) => {
    let input;
    return (
        <ScrollView
            contentContainerStyle={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "column",
                padding: 30,
                height: 3000
            }}
        >
            {displayOfficials(officials)}
        </ScrollView>
    );
};

export default connect(mapStateToProps)(OfficialsContainer);
