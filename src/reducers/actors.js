import * as types from "../actions/actionTypes";

import initialState from "../store/initialState";

export default (state = initialState.actors, {type, payload}) => {
    // return state;
    switch (type) {
        case types.GET_ACTORS_BY_MOVIE_ID: {
            return { ...state, isFetching: true };
        }
        case types.GET_ACTORS_BY_MOVIE_ID_SUCCESS: {
            // console.log(" --- reducer payload ACTORS", payload);
            const { actors } = payload;

            return { ...state, data: actors, isFetching: false };
        }
        case types.GET_ACTORS_BY_MOVIE_ID_FAIL: {
            return { ...state, isFetching: false };
        }
        default:
            return state;
    }
};

