import initialState from "../store/initialState";

export default (state = {places: [], price: 0}, action) => {
    switch (action.type) {
        case 'SET_PLACES': {
          const {arr} = action
            return { ...state, places: arr };
        }
        case 'SET_PRICE': {
            const {num} = action
            return { ...state, price: num, };
        }
        case 'CLEAR_PLACES': {
            return { ...state, places: [], price: 0 };
        }
        default:
            return state;
    }
};
