import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { checkExp } from '../_utils/checkToken'

import AdminSignIn from '../components/AdminSignIn'
import { adminSignIn } from '../actions/adminAuth'

import ModalWindow from '../components/ModalWindow'

class AdminAuth extends Component {
	sendAdminAuthValue = values => {
		this.props.adminSignInFunc(JSON.stringify(values))
	}

	render() {
        console.log(this.props.adminAuthState)
		const { error } = this.props.adminAuthState
		const tokenLocal = localStorage.getItem('token')
		if (tokenLocal && checkExp(tokenLocal)) {
			return <Redirect to="/admin-panel" />
		}

		return (
			<div className="admin-auth-block">
				<div className="admin-auth-block__form">
					<AdminSignIn onSubmit={this.sendAdminAuthValue} />
				</div>
				<div className="admin-auth-block__bg" />
				{error ? <ModalWindow text={error} /> : null}
			</div>
		)
	}
}

const mapStateToProps = state => {
    // console.log(state)
	return {
		adminAuthState: state.adminAuth,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		adminSignInFunc: payload => {
			dispatch(adminSignIn(payload))
		},
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminAuth)
