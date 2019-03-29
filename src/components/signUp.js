import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import logo from '../img/logo.svg'
import { signInValidation } from '../utils/validate'
import { renderField } from './common/customField'

class SignUp extends Component {
	submit = values => {
		const { postAuthRequest } = this.propsS
		postAuthRequest(values)
	}

	render() {
		const { handleSubmit, submitting, pristine } = this.props
		return (
			<form className="sign-up" onSubmit={handleSubmit(this.submit)}>
				<div className="sign-up__logo">
					<img src={logo} alt="logo" />
				</div>
				<h1 className="sign-up__title">Регистрация для входа в личный кабинет</h1>
				<p className="sign-up__text">Введите E-mail и пароль</p>
				<div className="sign-up__input">
					<Field
						name="email"
						type="email"
						label="Email"
						component={renderField}
					/>
				</div>
				<div className="sign-up__input">
					<Field
						name="password"
						type="password"
						label="Password"
						component={renderField}
					/>
				</div>
				<button
					className="sign-up__btn"
					disabled={pristine || submitting}
				>
					Регистрация
				</button>
			</form>
		)
	}
}
export default reduxForm({
	form: 'signUp',
	validate: signInValidation,
})(SignUp)