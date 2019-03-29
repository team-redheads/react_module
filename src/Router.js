import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Auth from './containers/Auth'

class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={Auth} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default Router