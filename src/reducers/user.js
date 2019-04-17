import initialState from "../store/initialState";
import * as types from "../actions/actionTypes";

export default (state = initialState.user, {type, payload}) => {
    // return state;
    switch (type) {
        case types.GET_USER_BY_ID: {
            return { ...state, isFetching: true };
        }
        case types.GET_USER_BY_ID_SUCCESS: {
            const { user } = payload
            console.log(user,'user');
            return { ...state, data: user, isFetching: false };
        }
        case types.GET_USER_BY_ID_FAIL: {
            return { ...state, isFetching: false };
        }

        case types.PUT_USER_BY_ID: {
            return { ...state, isFetching: true };
        }
        case types.PUT_USER_BY_ID_SUCCESS: {
            // const { user } = payload;
            console.log("put state --- ", state);
            console.log('put payload --- ', payload);
            return { ...state, payload, isFetching: false };
        }
        case types.PUT_USER_BY_ID_FAIL: {
            return { ...state, isFetching: false };
        }
        default:
            return state;
    }
};
