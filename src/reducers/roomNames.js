import initialState from "../store/initialState";

export default (state = initialState.roomNames, action ) => {
  return ( action.type === 'ROOMS_NAMES_FETCHING' ) ? { ...state, isFetching: true } :
   ( action.type === 'ROOMS_NAMES_SUCCESS' ) ? { ...state, data: action.payload, isFetching: false } :
   ( action.type === 'ROOMS_NAMES_FAIL' ) ? { ...state, isFetching: false } : state
}
