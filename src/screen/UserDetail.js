import React from 'react';
import {Button, Image, StyleSheet, Text, View} from "react-native";
import {ENTITY} from "../constants/index";
import EntityDetail from "../container/EntityItem";
import Section from "../component/Section";
import UserSummary from "../component/UserSummary";
import UserInfoItem from "../component/UserInfoItem";
import {RNChipView} from 'react-native-chip-view'


const UserDetail = props => {

    const {navigate} = props.navigation;
    const {id} = props.navigation.state.params;

    return (
        <EntityDetail
            id={id}
            entity={ENTITY.USERS}
        >{({item}) => (
            <Section>
                <Image
                    style={styles.image}
                    source={{uri: 'https://pixel.nymag.com/imgs/daily/vulture/2017/06/14/14-tom-cruise.w700.h700.jpg'}}
                />
                <UserSummary
                    heading={`${item.name}, ${item.company.name}`}
                    subHeading={`"${item.company.catchPhrase}"`}
                />
                <View
                    style={styles.userInfoItems}
                >
                    <UserInfoItem
                        key={'email'}
                        itemKey={'email'}
                        itemValue={item.email}
                    />
                    <UserInfoItem
                        key={'phone'}
                        itemKey={'phone'}
                        itemValue={item.phone}
                    />
                    <UserInfoItem
                        key={'website'}
                        itemKey={'website'}
                        itemValue={item.website}
                    />
                </View>
                <View
                    style={styles.tags}
                >
                    {item.company.bs.split(" ").map((tag,i) => (
                        <RNChipView
                            key={i}
                            title={tag}
                            avatar={false}
                        />
                    ))}
                </View>
                <Button
                    title={`Back To Browse`}
                    onPress={() => {
                        navigate('Home')
                    }}
                />
            </Section>
        )}

        </EntityDetail>
    )
};

const styles = StyleSheet.create({
    image: {
        borderRadius: 20,
        width: '100%',
        height: 250,
        marginBottom: 20
    },
    userInfoItems: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
    },
    tags: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 30,
    },
});

UserDetail.navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.title}`,
});


export default UserDetail;