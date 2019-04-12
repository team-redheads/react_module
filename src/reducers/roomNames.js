import initialState from "../store/initialState";

export default (state = initialState.roomNames, action ) => {
  if ( action.type === 'ROOMS_NAMES_FETCHING' ) return { ...state, isFetching: true };
  if ( action.type === 'ROOMS_NAMES_SUCCESS' ) return { ...state, data: action.payload, isFetching: false };
  if ( action.type === 'ROOMS_NAMES_FAIL' ) return { ...state, isFetching: false };
  return state
}
