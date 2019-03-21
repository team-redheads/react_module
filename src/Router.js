import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={ ... } />
                    <Route exact path='/' component={ ... } />
                    <Route exact path='/' component={ ... } />
                </Switch>
            </React.Fragment>
        )
    }
}

export default Router