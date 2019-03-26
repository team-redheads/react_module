import React from "react";
// import { Field } from "redux-form";

export const renderField = ({ input, label, type = "text", meta: { touched, error } }) => {
    return (
        <div className='block-field'>
            {/*<label className='block-field__label'>{label}</label>*/}
            <div>
                <input {...input}
                       placeholder={label}
                       type={type}
                       className='block-field__input'
                />
                {touched && error && <span>{error}</span>}
            </div>
        </div>
    );
};