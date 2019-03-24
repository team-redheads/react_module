import * as types from "../actions/actionTypes";

import initialState from "../store/initialState";

export default (state = initialState.session, {type, payload}) => {
    switch (type) {
        case types.GET_SESSION: {
            return { ...state, isFetching: true };
        }
        case types.GET_SESSION_SUCCESS: {
            // console.log(" --- payload reducer", payload);
            const { session } = payload;
            // console.log(" --- session reducer", session);
            return { ...state, data: session, isFetching: false };
        }
        case types.GET_SESSION_FAIL: {
            return { ...state, isFetching: false };
        }
        default:
            return state;
    }
};