import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt from "jwt-decode";
import { bindActionCreators } from 'redux';
import { Redirect } from "react-router-dom";
import { postSignInRequest, postSignUpAuthRequest, getLogOutAuthRequest } from '../actions/actionAuth';
import { jwtDecode } from "../_utils/checkExp";

import ModalWindow from '../components/ModalWindow';
import SignIn from '../components/signIn';
import SignUp from '../components/SignUp';
import Posters from '../components/AuthPosters';


class AuthUser extends Component {
	state = {
		auth: true,
		renderModalWindow: true
	};

	renderModal = () => {
		setTimeout(() => this.setState({ renderModalWindow: false }), 2000);
		this.setState({ renderModalWindow: true })
	};

	changeAuth = () => {
		this.setState(prevState => {
			return {
				auth: !prevState.auth,
			}
		})
	};

	takeValueSignIn = values => {
		this.props.postSignInRequest(values);
		this.renderModal();
	};

	takeValueSignUp = values => {
		values.firstName = 'Енот';
		values.lastName = 'Неопознанный';
		values.confirmPassword = values.password;
		this.props.postSignUpAuthRequest(values);
	};

	render() {
		const { token, error, message } = this.props;

		const token_lS = localStorage.getItem("token");

		if (jwtDecode(token_lS)){
			if (token && token === token_lS) {
				return <Redirect to={`/personal/${jwt(token).id}`} />;
			}
		} else { this.props.getLogOutAuthRequest() }


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
                { error && message && this.state.renderModalWindow ? <ModalWindow text={ message } /> : null}
			</div>
		)
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		postSignInRequest,
		postSignUpAuthRequest,
		getLogOutAuthRequest
	}, dispatch);

const mapStateToProps = state => ({
    token: state.auth.token,
    error: state.auth.error,
	message: state.auth.message
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthUser)
