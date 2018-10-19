export const GET_USERS_REQUEST = 'get/users/LOAD';
export const GET_USERS_SUCCESS = 'get/users/LOAD_SUCCESS';
export const GET_USERS_FAILURE = 'get/users/LOAD_FAIL';

export const getUsers = () => {

    return {
        type: GET_USERS_REQUEST,
        payload: {
            request: {
                url: `/users`
            }
        }
    };
};

export const GET_USER_REQUEST = 'get/user/LOAD';
export const GET_USER_SUCCESS = 'get/user/LOAD_SUCCESS';
export const GET_USER_FAILURE = 'get/user/LOAD_FAIL';

export const getUser = userId => (dispatch, getState) => {

    const user = getState().users.byId[userId];
    if (user) {
        return null;
    }

    return dispatch({
        type: GET_USER_REQUEST,
        payload: {
            request: {
                url: `/users/${userId}`
            }
        }
    });
};