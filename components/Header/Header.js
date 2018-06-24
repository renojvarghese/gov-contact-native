import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default (Header = ({ title, description, backgroundSrc, logoSrc }) => {
    return (
        <View>
            <Image source={backgroundSrc} />
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Image source={logoSrc} />
        </View>
    );
});
