import React from 'react';
import {View, Animated, PanResponder, Dimensions} from 'react-native';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

class Deck extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardIndex: 0,
        };

        this.renderCards = this.renderCards.bind(this);

        this._position = new Animated.ValueXY();
        this._panResponder = new PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderMove: (event, gesture) => {
                this._position.setValue({x: gesture.dx, y: 0})
            },
            onPanResponderRelease: (event, gesture) => {

                if (gesture.dx > SWIPE_THRESHOLD) {
                    this.dropCard(true);
                    return
                }
                if (-gesture.dx > SWIPE_THRESHOLD) {
                    this.dropCard(false);
                    return
                }
                this.resetPosition();
            },
        });
    }

    dropCard(liked) {
        Animated
            .spring(this._position, {toValue: {x: 0, y: SCREEN_HEIGHT}})
            .start(this.onDroppedCard.bind(this, liked));

    }

    onDroppedCard(liked) {

        const {onSwipeLeft, onSwipeRight, data} = this.props;
        const {cardIndex} = this.state;

        const item = data[cardIndex];
        liked ? onSwipeRight(item) : onSwipeLeft(item);
        this._position.setValue({x: 0, y: 0})
        this.setState((state) => {
            return {
                cardIndex: state.cardIndex + 1
            }
        })
    }

    resetPosition() {
        Animated.spring(this._position, {toValue: {x: 0, y: 0}}).start();
    }

    getCardStyle() {

        const rotate = this._position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2],
            outputRange: ['-120deg', '0deg', '120deg'],
        });

        return {
            ...this._position.getLayout(),
            ...styles.card,
            zIndex: 10,
            transform: [{rotate}]
        }
    }

    renderCards() {

        const {cardIndex} = this.state;
        const {data, renderCard, renderNoMoreCards} = this.props;

        if (cardIndex >= data.length) {
            return renderNoMoreCards();
        }

        return data
            .map((item, index) => {

                if (index < cardIndex) {
                    return null;
                }

                if (index === cardIndex) {
                    return (
                        <Animated.View
                            key={item.id}
                            style={this.getCardStyle()}
                            {...this._panResponder.panHandlers}
                        >
                            {renderCard(item)}
                        </Animated.View>
                    )
                }

                return (
                    <View
                        style={{
                            ...styles.card,
                            zIndex: -index,
                        }}
                        key={item.id}
                    >
                        {renderCard(item)}
                    </View>
                )
            });
    }

    render() {

        return (
            <View style={styles.cardContainer}>
                {this.renderCards()}
            </View>
        )
    }
}

const styles = {
    cardContainer: {
        position: 'relative',
        width: '100%',
    },
    card: {
        position: 'absolute',
        width: '100%',
    }
};

export default Deck;