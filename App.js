import React from 'react';
import axios from 'axios';
import thunk from 'redux-thunk';
import {createStackNavigator} from 'react-navigation';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './src/reducer';
import UserList from "./src/screen/UserList";
import UserDetail from "./src/screen/UserDetail";
import {BASE_API_URL} from "./src/constants";

const client = axios.create({
    baseURL: BASE_API_URL,
    responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(thunk, axiosMiddleware(client)));

const NavigationStack = createStackNavigator({
    Home: {screen: UserList},
    UserDetail: {screen: UserDetail},
});

export default App = () => {
    return (
        <Provider store={store}>
            <NavigationStack/>
        </Provider>
    )
}
