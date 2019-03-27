import * as types from "../actions/actionTypes";

import initialState from "../store/initialState";

export default (state = initialState.auth, { type, payload }) => {
    switch (type) {
        case types.AUTH_REQUEST: {
            return { ...state, isFetching: true };
        }
        case types.AUTH_REQUEST_SUCCESS: {
            const { token } = payload;
            // console.log('token', token);
            return { ...state, token, isFetching: false };
        }
        case types.AUTH_REQUEST_FAIL: {
            return { ...state, isFetching: false };
        }
        // case types.SET_TOKEN: {
        //     return { ...state, token: payload };
        // }

        // case "@@redux-form/CHANGE": {
        // 	if (meta.form === "signIn") {
        // 		console.log("@@redux-form/CHANGE", meta.field);
        // 		console.log("@@redux-form/CHANGE", payload);

        // 		return state;
        // 	}
        // 	return state;
        // }
        default:
            return state
    }
};
