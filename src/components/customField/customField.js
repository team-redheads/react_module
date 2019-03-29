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

export const customInput = props => {
	return (
		<React.Fragment>
			<div className="add-movie__input">
				<p>{props.label}</p>
				<input
					{...props.input}
					type={props.type}
					placeholder={props.placeholder}
				/>
				{props.meta.error && props.meta.touched && (
					<span className="error">{props.meta.error}</span>
				)}
			</div>
		</React.Fragment>
	)
}

export const customTextarea = props => {
	return (
		<React.Fragment>
			<div className="add-movie__textarea">
				<p>{props.label}</p>
				<textarea {...props.input} placeholder={props.placeholder} />
				{props.meta.error && props.meta.touched && (
					<span className="error">{props.meta.error}</span>
				)}
			</div>
		</React.Fragment>
	)
}
