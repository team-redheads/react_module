import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SignIn from '../components/signIn';
import MattPosters from '../components/mattPosters'
import { postAuthRequest } from '../actions/actionAuth'

class Auth extends Component {
    render() {
        const { postAuthRequest, token } = this.props;
        console.log('token', token);
        return (
            <div className="auth-wrapper">

                <div className="block-auth">
                    <SignIn postAuthRequest={ postAuthRequest } token={token} />
                    {/*{switchForm ? <SignUp /> : <SignIn auth={auth} token={token} />}*/}

                    {/*<button onClick={this.switchForm}>Don't have account?</button>*/}
                </div>
                <div className="block-posters">
                    <MattPosters />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ postAuthRequest }, dispatch);

const mapStateToProps = state => ({
    token: state.auth.token
    // singInForm: state.form.signIn
});
Auth = connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);

export default Auth;
