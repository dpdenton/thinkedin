import React from 'react';
import {ActivityIndicator, StyleSheet, View} from "react-native";

const Spinner = props => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={40}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Spinner;