import React, { Component } from 'react'

class ModalWindow extends Component {
	render() {
		console.log(this.props.text)
		return (
			<div className="modal-window">
				<h2 className="modal-window__title">Сообщение</h2>
				<p className="modal-window__text">
					{typeof this.props.text === 'object'
						? this.props.text.message
						: this.props.text}
				</p>
			</div>
		)
	}
}

export default ModalWindow
