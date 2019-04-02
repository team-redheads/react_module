import * as types from "./actionTypes";

// import axios from "axios";
import AxiosInstance from "../utils/axiosConfig";

// export const setToken = payload => ({
//     type: types.SET_TOKEN,
//     payload
// });

const authRequest          = payload => ({type: types.AUTH_REQUEST, payload});
const authRequestSuccess   = payload => ({ type: types.AUTH_REQUEST_SUCCESS, payload});
const authRequestFail      = payload => ({type: types.AUTH_REQUEST_FAIL, payload});


export const postAuthRequest = payload => async dispatch => {
    dispatch(authRequest());
    try {
        const { data } = await AxiosInstance({
            method: "POST",
            url: "auth/login",
            data: payload
        });
        // localStorage.setItem("token", data.token);
        // console.log(' ----- data', data);
        dispatch(authRequestSuccess(data));
    } catch (err) {
        dispatch(authRequestFail(err));
    }
};
