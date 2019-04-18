import AxiosInstance from "../_utils/axiosConfig";

const getRoomNames             = payload => ({type: 'ROOMS_NAMES_FETCHING', payload});
const getRoomNamesSuccess      = payload => ({type: 'ROOMS_NAMES_SUCCESS', payload});
const getRoomNamesFail         = payload => ({type: 'ROOMS_NAMES_FAIL', payload});

export const getRoomNamesRequest = () => async dispatch => {
    dispatch(getRoomNames());
    try {
        const { data } = await AxiosInstance({
            method: "GET",
            url: "movie/room"
        });
        // console.log(data,' ------ room data')
        dispatch(getRoomNamesSuccess(data));
    } catch (err) {
        dispatch(getRoomNamesFail(err));
    }
}
