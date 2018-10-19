import React from 'react';
import {StyleSheet, Text} from "react-native";
import PropTypes from 'prop-types';

const Heading = props => {

    const style = StyleSheet.flatten([styles.container, props.style]);

    return (
        <Text
            style={style}
        >
            {props.children}
        </Text>
    )
};

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

Heading.propTypes = {
    children: PropTypes.node,
};

export default Heading;