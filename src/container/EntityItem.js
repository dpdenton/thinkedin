import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ENTITY} from "../constants";
import {getUser} from "../action";

class EntityItem extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUser(this.props.id);
    }

    render() {
        return this.props.children({item: this.props.item})
    }
}

const entities = Object.keys(ENTITY).map(k => ENTITY[k]);

EntityItem.propTypes = {
    id: PropTypes.number.isRequired,
    entity: PropTypes.oneOf(entities).isRequired,
};


const mapState = (state, props) => {
    const entity = state[props.entity];
    return {
        item: entity.byId[props.id]
    };
};

const mapDispatch = {
    getUser
};

export default connect(mapState, mapDispatch)(EntityItem);