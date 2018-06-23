import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Official } from "./Official";

import { StyleSheet, Text, View } from "react-native";
// export class OfficialsContainer extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     get officialData() {
//         return this.props.officials.map((official, index) => {
//             return <Official key={"official_" + index} official={official} />;
//         });
//     }
//     render() {
//         return <View>{this.officialData}</View>;
//     }
// }
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
        <View>
            <Text>{displayOfficials(officials)}</Text>
        </View>
    );
};

export default connect(mapStateToProps)(OfficialsContainer);
