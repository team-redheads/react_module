import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import logo from '../_img/logo.svg'

import { signUpValidation } from '../_utils/validate'
import { renderField } from './customField'

class SignUp extends Component {
	render() {
		const { handleSubmit, submitting, pristine } = this.props
		return (
			<form className="sign-up" onSubmit={handleSubmit}>
				<div className="sign-up__logo">
					<img src={logo} alt="logo" />
				</div>
				<h1 className="sign-up__title">
					Регистрация для входа в личный кабинет
				</h1>
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
	validate: signUpValidation,
})(SignUp)
