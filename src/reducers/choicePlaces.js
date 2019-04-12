export default (state, action) => {
  if ( state === undefined )
    return { places: [], price: 0 }
  if ( action.type === 'SET_PLACES' ){
    return { places: action.arr, price: state.price }
  }
  if ( action.type === 'SET_PRICE')
    return { places: state.places, price: action.num }
  if ( action.type === 'CLEAR_PLACES')
    return { places: [], price: 0 }
  return state
}
