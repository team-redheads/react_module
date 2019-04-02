import * as types from "../actions/actionTypes";

import axios from "axios";
import AxiosInstance from "../_utils/axiosConfig";

const getSession =                  payload => ({ type: types.GET_SESSION, payload});
const getSessionSuccess =           payload => ({ type: types.GET_SESSION_SUCCESS, payload });
const getSessionFail =              payload => ({ type: types.GET_SESSION_FAIL, payload});

const getSessionByMovieId =         payload => ({ type: types.GET_SESSION_BY_MOVIE_ID, payload });
const getSessionByMovieIdSuccess =  payload => ({ type: types.GET_SESSION_BY_MOVIE_ID_SUCCESS, payload});
const getSessionByMovieIdFail =     payload => ({ type: types.GET_SESSION_BY_MOVIE_ID_FAIL, payload});


export const getSessionRequest = () => async dispatch => {
    dispatch(getSession());
    try {
        // const { data } = await axios({
        //     method: "GET",
        //     url: "https://test-app-a-level.herokuapp.com/api/movie/session",
        // });
        const { data } = await AxiosInstance({
            method: "GET",
            url: "movie/session"
        });
        // console.log("--- data getSessionRequest", data);
        dispatch(getSessionSuccess(data));
    } catch (err) {
        dispatch(getSessionFail(err));
    }
};

export const getSessionByMovieIdRequest = (id) => async dispatch => {
    dispatch(getSessionByMovieId());
    try {
        // console.log(" --- id getSessionByMovieIdRequest ", id);
        // const { data } = await axios({
        //     method: "GET",
        //     url: `https://test-app-a-level.herokuapp.com/api/movie/session?movie=${id}`,
        // });
        const { data } = await AxiosInstance({
            method: "GET",
            url: `movie/session?movie=${id}`
        });
        // console.log("--- data getSessionByMovieIdRequest", data);
        dispatch(getSessionByMovieIdSuccess(data));
    } catch (err) {
        dispatch(getSessionByMovieIdFail(err));
    }
};
