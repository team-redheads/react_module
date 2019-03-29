import React, { Component } from 'react'

import SignInAdmin from '../components/SignInAdmin'

import MattPosters from '../components/Posters'

class Auth extends Component {
	takeValueSignIn = values => {
		console.log('-----value_sign-in-admin', values)
	}

	render() {
		return (
			<div className="auth-block">
				<div className="auth-block__form">
					<SignInAdmin onSubmit={this.takeValueSignIn} />
				</div>
				<div className="auth-block__posters">
					<MattPosters />
				</div>
			</div>
		)
	}
}

export default Auth
