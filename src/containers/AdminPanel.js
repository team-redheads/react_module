import React, { Component } from 'react'

import Header from '../components/Header'
import MainAdmin from '../components/MainAdmin'

class AdminPanel extends Component {
	render() {
		console.log('-----children', this.props.children)
		return (
			<React.Fragment>
				<Header />
				<MainAdmin />
			</React.Fragment>
		)
	}
}

export default AdminPanel
