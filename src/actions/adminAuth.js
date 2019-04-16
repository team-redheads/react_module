export const setToken = payload => {
	return {
		type: 'SET_TOKEN',
		payload,
	}
}

export const adminSignInSuccess = payload => {
    console.log('ошибка', payload)

	return {
		type: 'SIGN_IN_SUCCES',
		payload,
	}
}

export const adminSignInFail = payload => {
    console.log('ошибка', payload)
	return {
		type: 'SIGN_IN_FAIL',
		payload,
	}
}

export const adminSignIn = payload => dispatch => {
	var request = new Request(
		'http://subdomain.entony.fs.a-level.com.ua/api/auth/login',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: payload,
		}
	)

	fetch(request)
		.then(response =>
			response.json().then(json => dispatch(adminSignInSuccess(json)))
		)
		.catch(error => dispatch(adminSignInFail(error)))
}

// ------------------------------------------------

export const adminSignOutSuccess = payload => {
    console.log('sign out success',payload)
	return {
		type: 'SIGN_OUT_SUCCES',
		payload,
	}
}

export const adminSignOutFail = payload => {
	return {
		type: 'SIGN_OUT_FAIL',
		payload,
	}
}

export const adminSignOut = () => dispatch => {
	var request = new Request(
		'http://subdomain.entony.fs.a-level.com.ua/api/auth/logout',
		{
			method: 'GET',
			header: {
				'Content-Type': 'application/json',
			},
		}
	)

	fetch(request)
		.then(resolve =>
			resolve.json().then(json => dispatch(adminSignOutSuccess(json)))
		)
		.catch(error => dispatch(adminSignInFail(error)))
}
