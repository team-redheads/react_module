import React, { Component } from 'react'

import authPostersList from '../_utils/authPostersList'

class AuthPosters extends Component {
	renderPosters = () => {
		const authPosterItem = authPostersList.map((value, index) => {
			return (
				<div
					key={index}
					className="auth-poster-item"
					style={{ backgroundImage: `url('${value}')` }}
				/>
			)
		});
		return authPosterItem
	};

	render() {
		return <div className="auth-poster-list">{this.renderPosters()}</div>
	}
}
export default AuthPosters