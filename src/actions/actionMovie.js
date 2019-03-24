import * as types from "../actions/actionTypes";

import axios from "axios";

const getMovie = payload => ({
    type: types.GET_MOVIE,
    payload
});

const getMovieSuccess = payload => {
    // console.log("--- payload getMovieSuccess", payload);
    return {
        type: types.GET_MOVIE_SUCCESS,
        payload
    };
};

const getMovieFail = payload => ({
    type: types.GET_MOVIE_FAIL,
    payload
});


const getMovieById = payload => ({
    type: types.GET_MOVIE_BY_ID,
    payload
});

const getMovieByIdSuccess = payload => {
    // console.log("--- payload getMovieByIdSuccess", payload);
    return {
        type: types.GET_MOVIE_BY_ID_SUCCESS,
        payload
    };
};

const getMovieByIdFail = payload => ({
    type: types.GET_MOVIE_BY_ID_FAIL,
    payload
});



export const getMovieRequest = () => async dispatch => {
    dispatch(getMovie());
    // const token = localStorage.getItem("token");
    try {
        const { data } = await axios({
            method: "GET",
            url: "https://test-app-a-level.herokuapp.com/api/movie/",
        });
        dispatch(getMovieSuccess(data));
    } catch (err) {
        dispatch(getMovieFail(err));
    }
};

export const getMovieByIdRequest = id => async dispatch => {
    dispatch(getMovieById());
    // const token = localStorage.getItem("token");
    try {
        // console.log(" --- id reducer", id);
        const { data } = await axios({
            method: "GET",
            url: `https://test-app-a-level.herokuapp.com/api/movie/?_id=${id}`,
        });
        // console.log(" --- data reducer", data);
        dispatch(getMovieByIdSuccess(data));
    } catch (err) {
        dispatch(getMovieByIdFail(err));
    }
};