import React from 'react';
import {StyleSheet, Text, View, PanResponder} from "react-native";
import {Card, Button} from 'react-native-elements';

import Deck from "../component/Deck";

const DATA = [
    {id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'},
    {id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'},
    {id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'},
    {id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'},
    {id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'},
    {id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'},
    {id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'},
    {id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'},
];


class Swiper extends React.Component {

    // const {navigate} = props.navigation;
    // const {id} = props.navigation.state.params;

    renderCard(item) {
        return (
            <Card
                key={item.id}
                title={item.text}
                image={{
                    uri: item.uri,
                }}
            >
                <Text>I can customise the card further</Text>
                <Button
                    icon={{name: 'code'}}
                    backgroundColor={'blue'}
                    title={'View Now'}
                />
            </Card>
        )
    }

    renderNoMoreCards() {
        return (
            <Card
                title={'No more cards!!!'}
            >
                <Text>No more cards!!!</Text>
                <Button
                    icon={{name: 'code'}}
                    backgroundColor={'blue'}
                    title={'View Now'}
                />
            </Card>
        )
    }

    render() {
        return (
            <View>
                <Deck
                    data={DATA}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    onSwipeLeft={(item) => {
                        console.log({item})
                    }}
                    onSwipeRight={(item) => {
                        console.log({item})
                    }}
                />
            </View>
        )
    }
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

export default Swiper;