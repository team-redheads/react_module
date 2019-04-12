import * as types from "../actions/actionTypes";
import AxiosInstance from "../_utils/axiosConfig";

const getMovie             = payload => ({type: types.GET_MOVIE, payload});
const getMovieSuccess      = payload => ({type: types.GET_MOVIE_SUCCESS, payload});
const getMovieFail         = payload => ({type: types.GET_MOVIE_FAIL, payload});

const getMovieById         = payload => ({type: types.GET_MOVIE_BY_ID, payload});
const getMovieByIdSuccess  = payload => ({type: types.GET_MOVIE_BY_ID_SUCCESS, payload});
const getMovieByIdFail     = payload => ({type: types.GET_MOVIE_BY_ID_FAIL, payload});



export const getMovieRequest = () => async dispatch => {
    dispatch(getMovie());
    // const token = localStorage.getItem("token");
    try {
        // const { data } = await axios({
        //     method: "GET",
        //     url: "https://test-app-a-level.herokuapp.com/api/movie/",
        // });
        const { data } = await AxiosInstance({
            method: "GET",
            url: "movie/"
        });
        // console.log(' ----- data', data);
        dispatch(getMovieSuccess(data));
    } catch (err) {
        dispatch(getMovieFail(err));
    }
};

export const getMovieByIdRequest = id => async dispatch => {
    dispatch(getMovieById());
    try {
        const { data } = await AxiosInstance({
            method: "GET",
            url: `movie/?_id=${id}`
        });
        dispatch(getMovieByIdSuccess(data));
    } catch (err) {
        dispatch(getMovieByIdFail(err));
    }
};