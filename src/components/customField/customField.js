import React from 'react'
// import { Field } from "redux-form";

export const renderField = ({
	input,
	label,
	type = 'text',
	meta: { touched, error },
}) => {
	return (
		<div>
			<input
				{...input}
				placeholder={label}
				type={type}
				className="block-field__input"
			/>
			{touched && error && <span className="error">{error}</span>}
		</div>
	)
}
