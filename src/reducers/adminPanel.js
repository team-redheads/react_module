import  initialState  from '../store/initialState'

export const adminPanel = (store = initialState.adminPanel, action) => {
	switch (action.type) {
		case 'ADD_MOVIE_SUCCESS': {
			console.log('reducer add movie success', action.payload)
			return {
				...store,
				addMovie: {
					movie: 'Фильм успешно добавлен. Обновите страницу.',
				},
			}
		}
		case 'ADD_MOVIE_FAIL': {
			console.log('reducer add movie fail', action.payload)
			return { ...store, error: action.payload }
		}

		case 'ON_LOAD_POSTER_SUCCESS': {
			console.log('reducer on load poster success', action.payload)
			return { ...store, addMovie: { posterLink: action.payload.link } }
		}
		case 'ON_LOAD_POSTER_FAIL': {
			console.log('reducer on load poster fail', action.payload)
			return { ...store, error: action.payload }
		}

		case 'DELL_MOVIE_SUCCESS': {
			console.log('reducer dell movie success', action.payload)
			return {
				...store,
				dellMovie: {
					movie: 'Фильм успешно удален. Обновите страницу.',
				},
			}
		}
		case 'DELL_MOVIE_FAIL': {
			console.log('reducer dell movie fail', action.payload)
			return { ...store, dellMovie: { error: action.payload } }
		}

		case 'GET_MOVIE_SUCCESS': {
			console.log('reducer get movie success', action.payload)
			return { ...store, getMovie: { movie: action.payload.movie } }
		}
		case 'GET_MOVIE_FAIL': {
			console.log('reducer get movie fail', action.payload)
			return { ...store, getMovie: { error: action.payload } }
		}

		case 'GET_ROOM_SUCCESS': {
			console.log('reducer get room success', action.payload)
			return { ...store, getRoom: { room: action.payload.rooms } }
		}
		case 'GET_ROOM_FAIL': {
			console.log('reducer get room fail', action.payload)
			return { ...store, getRoom: { error: action.payload } }
		}

		case 'GET_USER_SUCCESS': {
			console.log('reducer get user success', action.payload)
			return {
				...store,
				getUser: {
					user: action.payload.user.local,
					role: action.payload.user.role,
				},
			}
		}
		case 'GET_USER_FAIL': {
			console.log('reducer get user fail', action.payload)
			return { ...store, getUser: { error: action.payload } }
		}

		case 'POST_SESSION_SUCCESS': {
			console.log('reducer post session success', action.payload)
			return {
				...store,
				postSession: {
					session: action.payload.newSession,
					message: 'Сеанс добавлен',
				},
			}
		}
		case 'POST_SESSION_FAI': {
			console.log('reducer post session fail', action.payload)
			return { ...store, postSession: { error: action.payload } }
		}

		case 'PUT_MOVIE_SUCCESS': {
			console.log('reducer put movie success', action.payload)
			return {
				...store,
				putMovie: { movie: action.payload, message: 'Фильм изменен' },
			}
		}
		case 'PUT_MOVIE_FAIL': {
			console.log('reducer put movie fail', action.payload)
			return { ...store, PUT_MOVIE_FAIL: { error: action.payload } }
		}

		case 'CLEAR_POSTER': {
			console.log('clear poster', action.payload)
			return { ...store, addMovie: { posterLink: null } }
		}

		default:
			return { ...store }
	}
}
