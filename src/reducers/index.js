import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// import { reducer as formReducer } from "redux-form";

// import auth from "./auth";

import auth from './auth';
import movie from './movie';
import movie_by_id from './movie_by_id';
import session from './session';
import session_by_movie_id from './session_by_movie_id';

export default combineReducers({
    auth,
    movie,
    movie_by_id,
    session,
    session_by_movie_id,
    form: formReducer
});