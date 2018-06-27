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
    return <View style={{ marginTop: 20 }}>{displayOfficials(officials)}</View>;
};

export default connect(mapStateToProps)(OfficialsContainer);
