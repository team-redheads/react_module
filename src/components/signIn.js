import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

import { signInValidation } from "../_utils/validate";
// import { renderField } from "./common";
import { renderField } from "./customField";

import logo from "./header/img/logo.svg";


class SignIn extends Component{
    submit = values => {
        // console.log('this.props', this.props);
        const { postAuthRequest } = this.props;

        postAuthRequest(values);
    };

    render() {
        const { handleSubmit, submitting, pristine } = this.props;
        // console.log("da", this.props);
        return (
            <>
                <div className="header__logo">
                    <img
                        className="header__logo-img"
                        src={logo}
                        alt="logo"
                    />
                </div>
                <h1 className="block-title">Вход в личный кабинет </h1>
                <p className="block-text">Введите E-mail и пароль </p>
                <form onSubmit={handleSubmit(this.submit)} className='block-form'>
                    <Field name="email" type="email" label="Email" component={renderField} />
                    <Field name="password" type="password" label="Password" component={renderField} />

                    <button className='block-form-btn' disabled={ pristine || submitting } > Войти </button>
                </form>
            </>
        )
    }
}
export default reduxForm({
    form: "signIn",
    validate: signInValidation
})(SignIn);