import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from "react-router-dom";

import SignIn from '../components/signIn';
import SignUp from '../components/SignUp';

import Posters from '../components/AuthPosters';
import { postAuthRequest, postSignUpAuthRequest } from '../actions/actionAuth';

class AuthUser extends Component {
	state = {
		auth: true,
	};

	changeAuth = () => {
		this.setState(prevState => {
			return {
				auth: !prevState.auth,
			}
		})
	};

	takeValueSignIn = values => {
		// console.log('-----value_sign-in', values);
		this.props.postAuthRequest(values);
	};

	takeValueSignUp = values => {
		values.firstName = 'Unknown';
		values.lastName = 'Unknown';
		values.confirmPassword = values.password;
		this.props.postSignUpAuthRequest(values);
	};

	render() {
		const { token } = this.props;

		const token_lS = localStorage.getItem("token");
		// console.log("token    ", token);
		// console.log("token_lS ", token_lS);

		if (token && token === token_lS) {
			return <Redirect to="/personal" />;
		}

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
	bindActionCreators({ postAuthRequest, postSignUpAuthRequest }, dispatch);

const mapStateToProps = state => ({
	token: state.auth.token
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthUser)
