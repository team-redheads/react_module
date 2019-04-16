import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from "react-router-dom";
import { jwtDecode } from "../_utils/checkExp";
import jwt from "jwt-decode";


import ModalWindow from '../components/ModalWindow'

import SignIn from '../components/signIn';
import SignUp from '../components/SignUp';

import Posters from '../components/AuthPosters';
import { postSignInRequest, postSignUpAuthRequest, getLogOutAuthRequest } from '../actions/actionAuth';

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
		this.props.postSignInRequest(values);
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

		console.log("token    ", token);
		console.log("token_lS ", jwtDecode(token_lS));

		if (jwtDecode(token_lS)){
			if (token && token === token_lS) {
				return <Redirect to={`/personal/${jwt(token).id}`} />;
			}
		} else { this.props.getLogOutAuthRequest() }


		// if (token_lS && jwtDecode(token_lS)){
		// 	if (token && token === token_lS) {
		// 		return <Redirect to={`/personal/${jwt(token).id}`} />;
		// 	}
        // }
        console.log(this.props.error)
        const { error } = this.props
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
                {error ? <ModalWindow text={error} /> : null}
			</div>
		)
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ postSignInRequest, postSignUpAuthRequest, getLogOutAuthRequest }, dispatch);

const mapStateToProps = state => ({
    token: state.auth.token,
    error: state.auth.error
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthUser)
