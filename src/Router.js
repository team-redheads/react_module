import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import AuthUser from './containers/AuthUser'
import AuthAdmin from './containers/AuthAdmin'

import AdminPanel from './containers/AdminPanel'

class Router extends Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" />
					<Route exact path="/auth" component={AuthUser} />
					<Route exact path="/admin/auth" component={AuthAdmin} />
					<Route path="/admin" component={AdminPanel} />
				</Switch>
			</React.Fragment>
		)
	}
}

export default Router
