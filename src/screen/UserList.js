import React from 'react';
import {ENTITY} from "../constants/index";
import EntityList from "../container/EntityList";
import UserListItem from "../component/UserListItem";
import {StyleSheet, Text, View} from "react-native";
import Heading from "../component/Heading";
import Section from "../component/Section";

const UserList = props => {

    const {navigate} = props.navigation;

    return (
        <View style={styles.container}>
            <Section
                style={styles.headingSection}
            >
                <Heading
                    style={styles.heading}
                >
                    Welcome to ThinkedIn: the fake redux-driven LinkedIn.
                </Heading>
                <Heading>
                    Check out some profiles below.
                </Heading>
            </Section>
            <EntityList
                entity={ENTITY.USERS}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => (
                    <UserListItem
                        {...item}
                        company={item.company.name}
                        moto={item.company.catchPhrase}
                        onPress={() => {
                            navigate('UserDetail', {id: item.id, title: item.name})
                        }}
                    />
                )}
            />
        </View>
    )
};

UserList.navigationOptions = {
    title: 'ThinkedIn',
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    headingSection: {
        elevation: 5,
    },
    heading: {
        marginBottom: 20,
    },
});

export default UserList;