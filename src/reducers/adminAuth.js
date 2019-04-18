import  initialState  from '../store/initialState'

export const adminAuth = (state = initialState.adminAuth, action) => {
	switch (action.type) {
		case 'SET_TOKEN':
			return { ...state, token: action.payload }

		case 'SIGN_IN_SUCCES':
			const { user, token, message } = action.payload
			if (user && user.role === 1) {
				localStorage.setItem('token', token)
				return { ...state, token: token, user: user }
			} else if (user && user.role === 0) {
				return { ...state, error: 'Неверный пользователь' }
			} else if (message) {
				return { ...state, error: 'Неверная эл. почта иил пароль' }
			} else {
				return { ...state }
			}

		case 'SIGN_IN_FAIL':
			console.log('-----reduce fail', action.payload)
			return { ...state }

		case 'SIGN_OUT_SUCCES':
			return { ...state, token: action.payload.token }

		case 'SIGN_OUT_FAIL':
			return { ...state }
		default:
			return state
	}
}
