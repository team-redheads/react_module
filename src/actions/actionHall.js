import AxiosInstance from "../_utils/axiosConfig";

export const setCurSession = payload => ({
  type: 'SET_CURRENT_SESSION',
  payload: payload
});

export const clearCurSession = () => ({
  type: 'CLEAR_CURRENT_SESSION'
});
export const clearPlaces = () => ({ type: 'CLEAR_PLACES' });
export const setPlaces = arr => ({ type: 'SET_PLACES', arr: arr });
export const setPrice = num => ({ type: 'SET_PRICE', num: num });
export const pendingPlaces = () => ({ type: 'PENDING_PLACES' });
export const successPlaces = payload => ({ type: 'SUCCESS_PLACES', payload: payload });
export const failPlaces = () => ({ type: 'FAIL_PLACES' });

export const getPlacesRequest = id => async dispatch => {
    dispatch(pendingPlaces());
    try {
        const { data } = await AxiosInstance({
            method: "GET",
            url: "movie/space-shadow",
            params: {
              session: id
            }
        });
        console.log(data,"fukc");
        dispatch(successPlaces(data.space));
        dispatch(setPrice(data.count))
    } catch (err) {
        dispatch(failPlaces());
    }
};
