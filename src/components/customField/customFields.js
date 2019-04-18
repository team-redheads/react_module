import React from 'react'

export const customInput = ({ label, input, type, meta, placeholder }) => {
	return (
		<div className="custom-input">
			<label>{label}</label>
			<input {...input} type={type} placeholder={placeholder} />
			{meta.error && meta.touched && (
				<span className="error">{meta.error}</span>
			)}
		</div>
	)
}

export const customInputAddMovie = ({ type, label, input, placeholder }) => {
	return (
		<div className="form-block__input">
			<label>{label}</label>
			<input {...input} type={type} placeholder={placeholder} />
		</div>
	)
}

export const customTextAreaAddMovie = ({ label, input, placeholder }) => {
	return (
		<div className="form-block__text-area">
			<label>{label}</label>
			<textarea {...input} placeholder={placeholder} />
		</div>
	)
}

export const customSelect = ({ label, input, children }) => {
	return (
		<div className="form-block__select">
			<label>{label}</label>
			<select {...input}>{children}</select>
		</div>
	)
}