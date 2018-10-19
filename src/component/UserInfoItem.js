import React from 'react';
import PropTypes from "prop-types";
import {Text, View, StyleSheet} from "react-native";

const UserInfoItem = props => {

    return (
        <View style={styles.container}>
            <Text>
                <Text
                    style={styles.itemKey}
                >
                    {props.itemKey}:&nbsp;
                </Text>
                <Text
                    style={styles.subHeading}
                >
                    {props.itemValue}
                </Text>
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    itemKey: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    itemValue: {}
});

UserInfoItem.propTypes = {
    itemKey: PropTypes.string.isRequired,
    itemValue: PropTypes.string.isRequired,
};

export default UserInfoItem;