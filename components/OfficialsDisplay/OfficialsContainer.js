import React, { Component } from "react";
import PropTypes from "prop-types";
import { Official } from "./Official";
import { StyleSheet, Text, View } from "react-native";
export class OfficialsContainer extends Component {
    constructor(props) {
        super(props);
    }

    get officialData() {
        return this.context.store
            .getState()
            .officials.map((official, index) => {
                return (
                    <Official key={"official_" + index} official={official} />
                );
            });
    }
    render() {
        return <View>{this.officialData}</View>;
    }
}

OfficialsContainer.contextTypes = {
    store: PropTypes.object
};
