import  initialState from '../store/initialState'

export const adminAuth = (state = initialState.adminAuth, action) => {
	switch (action.type) {
		case 'SET_TOKEN':
			return { ...state, token: action.payload }

		case 'SIGN_IN_SUCCES':
			const { user, token } = action.payload
			if (user.role === 1) {
				localStorage.setItem('token', token)
				return { ...state, token: token, user: user }
			} else {
				return {
					...state,
					error: 'Ошибка! Введите данные администратора',
				}
			}

        case 'SIGN_IN_FAIL':
            console.log(action.payload)
			return { ...state, error: action.payload }

        case 'SIGN_OUT_SUCCES':
			return { ...state, token: action.payload.token }

		case 'SIGN_OUT_FAIL':
			return { ...state }
		default:
			return state
	}
}
