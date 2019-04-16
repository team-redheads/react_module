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

export const customSelect = ({ label, input }) => {
	return (
		<div className="custom-input">
			<label>{label}</label>
			<select {...input}>
				<option />
				<option />
			</select>
		</div>
	)
}
