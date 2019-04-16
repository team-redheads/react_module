import initialState from "../store/initialState";

export default ( state = initialState.curSession, action ) => {
  return ( action.type === 'SET_CURRENT_SESSION' ) ? { data: action.payload } :
         ( action.type === 'CLEAR_CURRENT_SESSION' ) ? { data: null } : state
}
