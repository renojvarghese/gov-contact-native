import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Image } from "react-native";
export class Official extends Component {
    constructor(props) {
        super(props);
        this.state = { imageStatus: "loading" };
    }

    handleImageLoaded() {
        this.setState({ imageStatus: "loaded" });
    }

    handleImageErrored() {
        this.setState({ imageStatus: "failed to load" });
    }
    render() {
        return (
            <View
                style={{
                    height: 100,
                    flex: 1
                }}
            >
                <Image
                    style={{ height: 50, width: 50 }}
                    source={require("../../img/empty.png")}
                />
                <Text>{this.props.official.name}</Text>
                <Text>{this.props.official.officeName}</Text>
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        officials: state.officials
    }
}
const mapDispatchToProps = dispatch => {
    onClick: official => {
        dispatch({
            type: "MAIN",
            official: official
        })
    }
}
Official.propTypes = {
    official: PropTypes.object.isRequired
};
