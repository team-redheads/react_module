const token = localStorage.getItem('token')

export const adminAddMovieSuccess = payload => {
	return {
		type: 'ADD_MOVIE_SUCCESS',
		payload,
	}
}

export const adminAddMovieFail = payload => {
	return {
		type: 'ADD_MOVIE_SUCCESS',
		payload,
	}
}

export const adminAddMovie = payload => dispatch => {
	console.log('payload action add movie', payload)

	var request = new Request(
		'http://subdomain.entony.fs.a-level.com.ua/api/movie',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: payload,
		}
	)

	fetch(request)
		.then(response =>
			response.json().then(json => dispatch(adminAddMovieSuccess(json)))
		)
		.catch(error => dispatch(adminAddMovieFail(error)))
}

// ===========================================================================================//

export const adminOnLoadPosterSuccess = payload => {
	return {
		type: 'ON_LOAD_POSTER_SUCCESS',
		payload,
	}
}

export const adminOnLoadPosterFail = payload => {
	return {
		type: 'ON_LOAD_POSTER_FAIL',
		payload,
	}
}

export const adminOnLoadPoster = payload => dispatch => {
	var request = new Request(
		'http://subdomain.entony.fs.a-level.com.ua/api/documents',
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: payload,
		}
	)

	fetch(request)
		.then(response =>
			response
				.json()
				.then(json => dispatch(adminOnLoadPosterSuccess(json)))
		)
		.catch(error => {
			dispatch(adminOnLoadPosterFail(error))
		})
}

// ===========================================================================================//

export const adminDellMovieSuccess = payload => {
	return {
		type: 'DELL_MOVIE_SUCCESS',
		payload,
	}
}

export const adminDellMovieFail = payload => {
	return {
		type: 'DELL_MOVIE_FAIL',
		payload,
	}
}

export const adminDellMovie = payload => dispatch => {
	console.log('action dell movie', payload)
	var request = new Request(
		`http://subdomain.entony.fs.a-level.com.ua/api/movie/${payload}`,
		{
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)

	fetch(request)
		.then(response =>
			response.json().then(json => dispatch(adminDellMovieSuccess(json)))
		)
		.catch(error => {
			dispatch(adminDellMovieFail(error))
		})
}

// ===========================================================================================//

export const adminGetMovieSuccess = payload => {
	return {
		type: 'GET_MOVIE_SUCCESS',
		payload,
	}
}

export const adminGetMovieFail = payload => {
	return {
		type: 'GET_MOVIE_FAIL',
		payload,
	}
}

export const adminGetMovie = () => dispatch => {
	var request = new Request(
		`http://subdomain.entony.fs.a-level.com.ua/api/movie`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)

	fetch(request)
		.then(response =>
			response.json().then(json => dispatch(adminGetMovieSuccess(json)))
		)
		.catch(error => {
			dispatch(adminGetMovieFail(error))
		})
}

// ===========================================================================================//

export const adminGetRoomSuccess = payload => {
	return {
		type: 'GET_ROOM_SUCCESS',
		payload,
	}
}

export const adminGetRoomFail = payload => {
	return {
		type: 'GET_ROOM_FAIL',
		payload,
	}
}

export const adminGetRoom = () => dispatch => {
	var request = new Request(
		`http://subdomain.entony.fs.a-level.com.ua/api/movie/room`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)

	fetch(request)
		.then(response =>
			response.json().then(json => dispatch(adminGetRoomSuccess(json)))
		)
		.catch(error => {
			dispatch(adminGetRoomFail(error))
		})
}

// ===========================================================================================//

export const adminGetUserSuccess = payload => {
    console.log(payload)
	return {
		type: 'GET_USER_SUCCESS',
		payload,
	}
}

export const adminGetUserFail = payload => {
    console.log(payload)    
	return {
		type: 'GET_USER_FAIL',
		payload,
	}
}

export const adminGetUser = payload => dispatch => {
	console.log('action get user', payload)
	const token = localStorage.getItem('token')
	var request = new Request(
		`http://subdomain.entony.fs.a-level.com.ua/api/users/${payload}`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)

	fetch(request)
		.then(response =>
			response.json().then(json => dispatch(adminGetUserSuccess(json)))
		)
		.catch(error => {
			dispatch(adminGetUserFail(error))
		})
}

// ===========================================================================================//

export const adminPostSessionSuccess = payload => {
	return {
		type: 'POST_SESSION_SUCCESS',
		payload,
	}
}

export const adminPostSessionFail = payload => {
	return {
		type: 'POST_SESSION_FAIL',
		payload,
	}
}

export const adminPostSession = payload => dispatch => {
	console.log('action post session', payload)

	var request = new Request(
		`http://subdomain.entony.fs.a-level.com.ua/api/movie/session`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
            },
            body: payload
		}
	)

	fetch(request)
		.then(response =>
			response
				.json()
				.then(json => dispatch(adminPostSessionSuccess(json)))
		)
		.catch(error => {
			dispatch(adminPostSessionFail(error))
		})
}

// ===========================================================================================//

export const adminPutMovieSuccess = payload => {
	return {
		type: 'PUT_MOVIE_SUCCESS',
		payload,
	}
}

export const adminPutMovieFail = payload => {
	return {
		type: 'PUT_MOVIE_FAIL',
		payload,
	}
}

export const adminPutMovie = (payload, id) => dispatch => {
	console.log('action put movie', payload, id)

	var request = new Request(
		`http://subdomain.entony.fs.a-level.com.ua/api/movie/${id}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
            },
            body: payload
		}
	)

	fetch(request)
		.then(response =>
			response
				.json()
				.then(json => dispatch(adminPutMovieSuccess(json)))
		)
		.catch(error => {
			dispatch(adminPutMovieFail(error))
		})
}

// ===========================================================================================//

export const clearPoster = payload => {
	return {
		type: 'CLEAR_POSTER',
		payload,
	}
}

// ===========================================================================================//
