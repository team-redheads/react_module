import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import logo from '../_img/logo.svg'
import { customInput } from './customField/customFields'
import { signInValidation } from '../_utils/validate'

class AdminSignIn extends Component {
	render() {
		const { handleSubmit, submitting, pristine } = this.props
		return (
			<form className="sign-in" onSubmit={handleSubmit}>
				<div className="sign-in__logo">
					<img src={logo} alt="logo" />
				</div>
				<h1 className="sign-in__title">Вход в админ-панель </h1>
				<p className="sign-in__text">Введите эл. почту и пароль </p>
				<div className="sign-in__input">
					<Field
						name="email"
						component={customInput}
						type="email"
						label="Эл. почта"
					/>
				</div>
				<div className="sign-in__input">
					<Field
						name="password"
						component={customInput}
						type="password"
						label="Пароль"
					/>
				</div>
				<button
					type="submit"
					className="sign-in__btn"
					disabled={pristine || submitting}
				>
					Войти
				</button>
			</form>
		)
	}
}

export default reduxForm({ form: 'adminSignIn', signInValidation })(AdminSignIn)
