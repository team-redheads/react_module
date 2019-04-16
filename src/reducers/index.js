import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import auth from './auth';
import user from './user';
import actors from './actors'
import movie from './movie';
import movie_by_id from './movie_by_id';
import session from './session';
import session_by_movie_id from './session_by_movie_id';

import choiceSessionReducer from './choiceSessionReducer.js';
import choicePlaces from './choicePlaces.js'
import roomNames from './roomNames.js'

import {adminAuth} from './adminAuth'

export default combineReducers({
    auth,
    user,
    actors,
    movie,
    movie_by_id,
    session,
    session_by_movie_id,
    form: formReducer,
    curSession: choiceSessionReducer,
    places: choicePlaces,
    roomNames,
    adminAuth
});
