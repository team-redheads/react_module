import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import { Icon } from 'antd';

import {renderField} from "./customField";

class Profile extends Component{
    render() {
        const { handleSubmit, submitting, pristine } = this.props;
        return (
            <form className='profile-block' onSubmit={handleSubmit}>
                <div className='profile-block__button'>
                    <div className="profile-block__title"><h1>Ваш профиль</h1></div>
                    <button
                        className="profile-block__btn"
                        disabled={pristine || submitting}
                    >
                        <Icon type="check" className="profile-block__icon"/> Сохранить
                    </button>
                </div>
                <div className='profile-block__content'>
                    <div className="profile-block__personal-info personal-info" >
                        <div className='personal-info__title'><h2>Персональная информация</h2></div>
                        <p className="personal-info__text"> Имя </p>
                        <div className="personal-info__input">
                            <Field name="firstName" type="text" label="Имя"  component={renderField}/>
                        </div>
                        <p className="personal-info__text"> Фамилия </p>
                        <div className="personal-info__input">
                            <Field name="lastName" type="text" label="Фамилия" component={renderField}/>
                        </div>
                        <p className="personal-info__text"> Електронная почта </p>
                        <div className="personal-info__input">
                            <Field name="email" type="email" label="Електронная почта" disabled={true} component={renderField}/>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default reduxForm({
    form: 'signIn',
})(Profile);