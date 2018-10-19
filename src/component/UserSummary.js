import React from 'react';
import PropTypes from "prop-types";
import {Text, View, StyleSheet} from "react-native";

const UserSummary = props => {

    return (
        <View>
            <Text
                style={styles.heading}
            >
                {props.heading}
            </Text>
            {props.subHeading && <Text
                style={styles.subHeading}
            >
                {props.subHeading}
            </Text>}
        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        marginBottom: 5,
        textAlign: 'center',
    },
    subHeading: {
        fontSize: 18,
        marginBottom: 20,
        fontStyle: 'italic',
        textAlign: 'center',
    }
});

UserSummary.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string,
};

export default UserSummary;