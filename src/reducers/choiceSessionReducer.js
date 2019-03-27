import initialState from "../store/initialState";

export default ( state = initialState.curSession, action ) => {
  if ( action.type === 'SET_CURRENT_SESSION' ) return { data: action.payload }
  if ( action.type === 'CLEAR_CURRENT_SESSION' ) return { data: null }
  return state
}
