import React, { Component } from 'react'
import { connect } from 'react-redux'

import SignIn from '../components/signIn'
import SignUp from '../components/signUp'

import MattPosters from '../components/mattPosters'
// import { postAuthRequest } from '../actions/actionAuth'

class Auth extends Component {
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

	render() {
		console.log('----props-auth', this.props)
		return (
			<div className="auth-block">
				<div className="auth-block__form">
					{this.state.auth ? (
						<SignIn
							// postAuthRequestFunc={postAuthRequest}
							// onSubmit={this.submit}
						/>
					) : (
						<SignUp onSubmit={this.submit} />
					)}
					<button
						className="auth-block__btn"
						onClick={this.changeAuth}
					>
						{this.state.auth ? 'Регистрация' : 'Войти'}
					</button>
				</div>
				<div className="auth-block__posters">
					<MattPosters />
				</div>
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		// token: store.auth.token,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		postAuthRequestFunc: payload => {
			// dispatch(postAuthRequest(payload))
		},
	}
}

// const mapDispatchToProps = dispatch =>
// 	bindActionCreators({ postAuthRequest }, dispatch)

Auth = connect(
	mapStateToProps,
	mapDispatchToProps
)(Auth)

export default Auth
