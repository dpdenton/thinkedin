import {
    GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE, GET_USER_SUCCESS, GET_USER_REQUEST,
    GET_USER_FAILURE
} from "../action";


const initialState = {
    users: {
        byId: {},
        ids: [],
    }
};

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case GET_USER_REQUEST:
        case GET_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_USER_FAILURE:
        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching repositories'
            };

        case GET_USER_SUCCESS:

            return {
                ...state,
                loading: false,
                users: {
                    ...state.users,
                    byId: Object.assign({}, state.users.byId, action.payload.data)
                }
            };

        case GET_USERS_SUCCESS:

            return {
                ...state,
                loading: false,
                users: {
                    ...state.users,
                    ids: setUserIds(state.ids, action),
                    byId: setUsersById(state.byId, action),
                }
            };
        default:
            return state;
    }
}

const setUsersById = (byId, action) => {

    let {data} = action.payload;

    const usersById = {};

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        usersById[item.id] = item;
    }

    return Object.assign({}, byId, usersById);
};

const setUserIds = (ids, action) => {

    let {data} = action.payload;
    return data.map(item => item.id);
};