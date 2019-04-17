import initialState from "../store/initialState";

export default ( state = initialState.tickets, action ) => {
    switch ( action.type ) {
        case 'SUCCESS_BUY_TICKET': {
            const newState = [ ...state.purchased ]
            newState.push( action.ticket )
            let oldTickets = localStorage.getItem ('tickets')
            localStorage.setItem ('tickets', JSON.stringify (JSON.parse(oldTickets || '[]').concat ([action.ticket])))
            return { ...state, purchased: newState };
        }
        case 'ERROR_BUY_TICKET': {
            const newState = [ ...state.notPurchased ]
            newState.push( action.ticket )
            return { ...state, notPurchased: newState };
        }
        default:
            return state;
    }
}
