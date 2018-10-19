import React from 'react';
import {connect} from 'react-redux';
import {FlatList, ActivityIndicator, StyleSheet, View} from "react-native";
import {getUsers} from '../action/index';
import {ENTITY} from "../constants";
import PropTypes from "prop-types";
import Spinner from "../component/Spinner";

class EntityList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return this.props.loading ? <Spinner/> : <FlatList {...this.props} />;
    }
}

const entities = Object.keys(ENTITY).map(k => ENTITY[k]);

EntityList.propTypes = {
    entity: PropTypes.oneOf(entities).isRequired,
};

const mapState = (state, props) => {

    const entity = state[props.entity];
    return {
        loading: entity.loading,
        data: entity.ids.map(id => entity.byId[id])
    };
};

const mapDispatch = {
    getUsers
};

export default connect(mapState, mapDispatch)(EntityList);