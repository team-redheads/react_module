import * as types from "./actionTypes";

// import axios from "axios";
import AxiosInstance from "../_utils/axiosConfig";

export const setToken            = payload => ({ type: types.SET_TOKEN, payload});

const authRequest                = payload => ({ type: types.AUTH_REQUEST, payload});
const authRequestSuccess         = payload => ({ type: types.AUTH_REQUEST_SUCCESS, payload});
const authRequestFail            = payload => ({ type: types.AUTH_REQUEST_FAIL, payload});

const authSignUpRequest          = payload => ({ type: types.AUTH_SIGN_UP_REQUEST, payload});
const authSignUpRequestSuccess   = payload => ({ type: types.AUTH_SIGN_UP_REQUEST_SUCCESS, payload});
const authSignUpRequestFail      = payload => ({ type: types.AUTH_SIGN_UP_REQUEST_FAIL, payload});

const authLogOutRequest          = payload => ({ type: types.AUTH_LOG_OUT_REQUEST, payload});
const authLogOutRequestSuccess   = payload => ({ type: types.AUTH_LOG_OUT_REQUEST_SUCCESS, payload});
const authLogOutRequestFail      = payload => ({ type: types.AUTH_LOG_OUT_REQUEST_FAIL, payload});


export const postSignInRequest = payload => async dispatch => {
    dispatch(authRequest());
    try {
        const { data } = await AxiosInstance({
            method: "POST",
            url: "auth/login",
            data: payload
        });
        localStorage.setItem("token", data.token);
        dispatch(authRequestSuccess(data));
    } catch (err) {
        dispatch(authRequestFail(err));
    }
};

export const postSignUpAuthRequest = payload => async dispatch => {
    dispatch(authSignUpRequest());
    try {
        console.log(' ----- payload', payload);
        const { data } = await AxiosInstance({
            method: "POST",
            url: "auth/register",
            data: payload
        });
        dispatch(authSignUpRequestSuccess(data));

        if (data.message === 'User was successfully register')
            dispatch(postSignInRequest({
                    email: payload.email,
                    password: payload.password
                }
            ))
    } catch (err) {
        dispatch(authSignUpRequestFail(err));
    }
};

export const getLogOutAuthRequest = () => async dispatch => {
    dispatch(authLogOutRequest());
    try {
        const { data } = await AxiosInstance({
            method: "GET",
            url: "auth/logout"
        });
        localStorage.removeItem ( "token" );
        dispatch(authLogOutRequestSuccess(data));
    } catch (err) {
        dispatch(authLogOutRequestFail(err));
    }
};
