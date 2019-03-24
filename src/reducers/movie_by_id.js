import initialState from "../store/initialState";
import * as types from "../actions/actionTypes";

export default (state = initialState.movie_by_id, {type, payload}) => {
    // return state;
    switch (type) {
        case types.GET_MOVIE_BY_ID: {
            return { ...state, isFetching: true };
        }
        case types.GET_MOVIE_BY_ID_SUCCESS: {
            const { movie } = payload;
            return { ...state, data: movie, isFetching: false };
        }
        case types.GET_MOVIE_BY_ID_FAIL: {
            return { ...state, isFetching: false };
        }
        default:
            return state;
    }
};