import React from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet} from "react-native";
import Section from "./Section";
import UserSummary from "./UserSummary";

const UserListItem = props => {

    return (
        <Section
            style={styles.container}
        >
            <UserSummary
                heading={`${props.name}, ${props.company}`}
                subHeading={`"${props.moto}"`}
                />
            <Button
                title={`Go to ${props.name}'s profile`}
                onPress={props.onPress}
            />
        </Section>
    )
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: 'gainsboro'
    },
});

UserListItem.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    moto: PropTypes.string.isRequired,
};

export default UserListItem;