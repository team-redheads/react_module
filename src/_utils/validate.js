export const signInValidation = values => {
	const errors = {}

	if (!values.email) {
		errors.email = 'Необходимо ввести эл. почту'
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Введите адрес электронной почты'
	}

	if (!values.password) {
		errors.password = 'Введите пароль'
	}
	return errors
}

export const signUpValidation = values => {
	const errors = {}

	if (!values.email) {
		errors.email = 'Необходимо ввести эл. почту'
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Введите имейл'
	}

	if (!values.password) {
		errors.password = 'Необходимо ввести пароль'
	} else if (values.password.length < 4) {
		errors.password = 'Пароль должен быть не меньше 4 символов'
	}
	return errors
}

export const inputValid = value => (value ? undefined : 'Необходимо ввести')
