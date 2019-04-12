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
