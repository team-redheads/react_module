import AxiosInstance from "../_utils/axiosConfig";

const successBuyTicket             = payload => ({ type: 'SUCCESS_BUY_TICKET', ticket: payload });
const errorBuyTicket               = ticket => ({type: 'ERROR_BUY_TICKET', ticket: ticket });

export const buyTicketsRequest = (ticket, data) => async dispatch => {
    try {
        const { data } = await AxiosInstance({
            method: 'PUT',
            url: `movie/space/${ ticket._id }`,
            data: { free: true }
        });
        console.log(data, "data")
        dispatch(successBuyTicket ( data.space ));
    } catch (err) {
      console.error(err)
        dispatch(errorBuyTicket ( ticket ));
    }
}
