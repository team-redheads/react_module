import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import logo from '../_img/logo.svg'

import { signInValidation } from '../_utils/validate'
import { renderField } from './customField'

class SignIn extends Component {
	render() {
		const { handleSubmit, submitting, pristine } = this.props;
		return (
			<form className="sign-in" onSubmit={handleSubmit}>
				<div className="sign-in__logo">
					<img src={logo} alt="logo" />
				</div>
				<h1 className="sign-in__title">Вход в личный кабинет</h1>
				<p className="sign-in__text">Введите E-mail и пароль</p>
				<div className="sign-in__input">
					<Field
						name="email"
						type="email"
						label="Email"
						component={renderField}
					/>
				</div>
				<div className="sign-in__input">
					<Field
						name="password"
						type="password"
						label="Password"
						component={renderField}
					/>
				</div>
				<button
					className="sign-in__btn"
					disabled={pristine || submitting}
				>
					Войти
				</button>
			</form>
		)
	}
}
export default reduxForm({
	form: 'signIn',
	validate: signInValidation,
})(SignIn)
