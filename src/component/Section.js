import React from 'react';
import PropTypes from "prop-types";
import {StyleSheet, View} from "react-native";

const Section = props => {

    const style = StyleSheet.flatten([styles.default, props.style]);

    return (
        <View style={style}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    default: {
        padding: 20,
        backgroundColor: 'white',
    }
});

Section.propTypes = {
    children: PropTypes.node,
};

export default Section;

