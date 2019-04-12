import * as types from "../actions/actionTypes";
import AxiosInstance from "../_utils/axiosConfig";

const getActors             = payload => ({type: types.GET_ACTORS_BY_MOVIE_ID, payload});
const getActorsSuccess      = payload => ({type: types.GET_ACTORS_BY_MOVIE_ID_SUCCESS, payload});
const getActorsFail         = payload => ({type: types.GET_ACTORS_BY_MOVIE_ID_FAIL, payload});

export const getActorsRequest = id => async dispatch => {
    dispatch(getActors());
    console.log(' ----- ACTORS id', id);
    // const token = localStorage.getItem("token");
    try {
        const { data } = await AxiosInstance({
            method: "GET",
            url: `movie/actors?movie=${id}`
        });
        // console.log(' ----- ACTORS data', data);
        dispatch(getActorsSuccess(data));
    } catch (err) {
        dispatch(getActorsFail(err));
    }
};