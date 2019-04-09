import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setToken } from "./actions/actionAuth";

import 'moment/locale/ru';

import HallPage from './containers/hallPage/HallPage.js'
import PrivateRoute from "./privateRouter";

import DetailsMoviePageContainer from './containers/detailsMoviePageContainer';
import MovieContainer from './containers/movieContainer';
import TrailerPage from './components/trailerPage';
import AuthUser from './containers/AuthUser';
import Soon from './containers/soonContainer';
import Header from './components/Header';
import Personal from './components/Personal';

class Router extends Component {

	componentDidMount() {
		const token = localStorage.getItem("token");

		if (token) {
			const { setToken } = this.props;
			console.log(' --- token ----', token);
			return setToken(token);
		}
	}

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
					<Route exact path="/soon" component={ Soon } />
					<Route exact path="/hall" component={HallPage} />
					<PrivateRoute exact path="/personal" component={Personal} />

					<Route
						render={() => (
							<React.Fragment>
								<Header />
								<div className="notFound">404 NOT FOUND</div>
							</React.Fragment>
						)}
					/>
				</Switch>
			</React.Fragment>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ setToken }, dispatch);

Router = connect( null, mapDispatchToProps)(Router)

export default Router
