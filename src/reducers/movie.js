import * as types from "../actions/actionTypes";

import initialState from "../store/initialState";

export default (state = initialState.movie, {type, payload}) => {
    // return state;
    switch (type) {
        case types.GET_MOVIE: {
            return { ...state, isFetching: true };
        }
        case types.GET_MOVIE_SUCCESS: {
            // console.log(" --- payload reducer", payload);
            const { movie } = payload;
            return { ...state, data: movie, isFetching: false };
        }
        case types.GET_MOVIE_FAIL: {
            return { ...state, isFetching: false };
        }
        default:
            return state;
    }
};

