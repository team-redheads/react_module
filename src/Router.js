import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// import 'moment-timezone';
import 'moment/locale/ru'
import HallPage from './containers/hallPage/HallPage.js'

import DetailsMoviePageContainer from './containers/detailsMoviePageContainer'
import MovieContainer from './containers/movieContainer'
import TrailerPage from './components/trailerPage'
import AuthUser from './containers/AuthUser'

class Router extends Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					{/* --- LIST WITH FILMS --- */}
					<Route exact path="/" component={MovieContainer} />
					<Route
						exact
						path="/movie/:id"
						component={DetailsMoviePageContainer}
					/>
					<Route exact path="/trailer/:url" component={TrailerPage} />
					<Route exact path="/auth" component={AuthUser} />
					<Route exact path="/hall" component={HallPage} />
					<Route
						render={() => (
							<div className="notFound">404 NOT FOUND</div>
						)}
					/>
				</Switch>
			</React.Fragment>
		)
	}
}

export default Router