import * as types from "./actionTypes";

import axios from "axios";
//
// export const setToken = payload => ({
//     type: types.SET_TOKEN,
//     payload
// });

const authRequest = payload => ({
    type: types.AUTH_REQUEST,
    payload
});

const authRequestSuccess = payload => ({
    type: types.AUTH_REQUEST_SUCCESS,
    payload
});

const authRequestFail = payload => ({
    type: types.AUTH_REQUEST_FAIL,
    payload
});

export const postAuthRequest = payload => async dispatch => {
    dispatch(authRequest());
    try {
        const { data } = await axios({
            method: "POST",
            url: "https://test-app-a-level.herokuapp.com/api/auth/login",
            headers: {
                "Content-Type": "application/json"
            },
            data: payload
        });
        // console.log('data',data);
        // localStorage.setItem("token", data.token);
        dispatch(authRequestSuccess(data));
    } catch (err) {
        dispatch(authRequestFail(err));
    }
};
