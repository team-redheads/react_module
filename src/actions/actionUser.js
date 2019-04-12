import * as types from "../actions/actionTypes";
import AxiosInstance from "../_utils/axiosConfig";

const getUserById         = payload => ({type: types.GET_USER_BY_ID, payload});
const getUserByIdSuccess  = payload => ({type: types.GET_USER_BY_ID_SUCCESS, payload});
const getUserByIdFail     = payload => ({type: types.GET_USER_BY_ID_FAIL, payload});

const putUserById         = payload => ({type: types.PUT_USER_BY_ID, payload});
const putUserByIdSuccess  = payload => ({type: types.PUT_USER_BY_ID_SUCCESS, payload});
const putUserByIdFail     = payload => ({type: types.PUT_USER_BY_ID_FAIL, payload});

export const getUserByIdRequest = id => async dispatch => {
    dispatch(getUserById());
    try {
        const { data } = await AxiosInstance({
            method: "GET",
            url: `users/${id}`
        });
        // console.log("data getUserByIdRequest --- ", data);
        dispatch(getUserByIdSuccess(data))
    }
    catch (err) {
        dispatch(getUserByIdFail(err));
    }
};

export const updateUserByIdRequest = payload => async dispatch => {
    const { id, values } = payload;

    console.log('action id : ', id);
    console.log('action values : ', values);

    dispatch(putUserById());
    try {
        // console.log('11111');
        const { data } = await AxiosInstance({
            method: "PUT",
            url: `users/${id}`,
            data: values
        });
        // console.log('22222');
        console.log("data putUserByIdRequest --- ", data);
        dispatch(putUserByIdSuccess(data))
    }
    catch (err) {
        dispatch(putUserByIdFail(err));
    }
};