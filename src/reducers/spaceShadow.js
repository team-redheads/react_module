import initialState from "../store/initialState";

export default (state = initialState.places, action) => {
    switch (action.type) {
        case 'PENDING_PLACES': {
            return { ...state, isFetching: true, initial: false };
        }
        case 'SUCCESS_PLACES': {
            return { ...state, places: action.payload, isFetching: false };
        }
        case 'FAIL_PLACES': {
            return { ...state, isFetching: false, error: true };
        }
        default:
            return state;
    }
};
