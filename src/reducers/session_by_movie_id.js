import initialState from "../store/initialState";
import * as types from "../actions/actionTypes";

export default (state = initialState.movie_by_id, {type, payload}) => {
    switch (type) {
        case types.GET_SESSION_BY_MOVIE_ID: {
            return { ...state, isFetching: true };
        }
        case types.GET_SESSION_BY_MOVIE_ID_SUCCESS: {
            const { session } = payload;
            return { ...state, data: session, isFetching: false };
        }
        case types.GET_SESSION_BY_MOVIE_ID_FAIL: {
            return { ...state, isFetching: false };
        }
        default:
            return state;
    }
};