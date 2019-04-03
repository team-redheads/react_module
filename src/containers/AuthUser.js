import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

import Posters from '../components/AuthPosters'
import { postAuthRequest } from '../actions/actionAuth'

class AuthUser extends Component {
	state = {
		auth: true,
	}

	changeAuth = () => {
		this.setState(prevState => {
			return {
				auth: !prevState.auth,
			}
		})
	}

	takeValueSignIn = values => {
		console.log('-----value_sign-in', values)
	}

	takeValueSignUp = values => {
		console.log('-----value_sign-up', values)
	}

	render() {
		return (
			<div className="auth-block">
				<div className="auth-block__form">
					{this.state.auth ? (
						<SignIn onSubmit={this.takeValueSignIn} />
					) : (
						<SignUp onSubmit={this.takeValueSignUp} />
					)}
					<button
						className="auth-block__btn"
						onClick={this.changeAuth}
					>
						{this.state.auth ? 'Регистрация' : 'Войти'}
					</button>
				</div>
				<div className="auth-block__posters">
					<Posters />
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ postAuthRequest }, dispatch)

const mapStateToProps = state => ({
	token: state.auth.token,
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthUser)
