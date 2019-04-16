import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { adminSignOut } from '../actions/adminAuth'
import { checkExp, takeId } from '../_utils/checkToken'

import Header from '../components/Header'
import HeaderMain from '../components/HeaderMain'

import AllMovies from '../components/AllMovies.js'
import AddMovie from '../components/AddMovie.js'
import AddMovieInfo from '../components/AddMovieInfo.js'
import AddUserInfo from '../components/AddUserInfo'

class AdminPanel extends Component {
	state = {
		user: {
			email: null,
			firstName: null,
			lastName: null,
		},
		movie: null,
	}

	componentDidMount() {
		this.props.history.push('/admin-panel/all-movies')

		const token = localStorage.getItem('token')
		fetch(
			`http://subdomain.entony.fs.a-level.com.ua/api/users/${takeId(
				token
			)}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
			.then(response =>
				response
					.json()
					.then(json => this.setState({ user: json.user.local }))
			)
			.catch(error => console.log(error))

		fetch(`http://subdomain.entony.fs.a-level.com.ua/api/movie`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then(response =>
				response
					.json()
					.then(json => this.setState({ movie: json.movie }))
			)
			.catch(error => console.log(error))

		return !checkExp(token)
			? this.props.history.push('/admin-panel/auth')
			: null
	}

	signOut = () => {
		localStorage.removeItem('token')
		this.props.adminSignOutFunc()
	}

	render() {
		// console.log(takeId(localStorage.getItem('token')))
		// console.log(this.props.adminAuthState.token)
		console.log(this.state)
		return (
			<Fragment>
				<Header signOutFunc={this.signOut} />
				<div className="main-block">
					<HeaderMain userInfo={this.state.user} />
					<div className="main-block__content">
						<Switch>
							<Route
								exact
								path="/admin-panel/all-movies"
								render={() =>
									this.state.movie ? (
										<AllMovies
											listMovie={this.state.movie}
										/>
									) : null
								}
							/>
							<Route
								path="/admin-panel/add-movie"
								render={() => (
									<AddMovie
									// getLinkPoster={this.props.loadFunc}
									// linkPoster={this.props.linkPoster}
									// onSubmit={this.takeValueAddMovie}
									/>
								)}
							/>
							<Route
								path="/admin-panel/add-movie-info"
								render={() => (
									<AddMovieInfo
									// takeValue={this.takeValueAddHallSesion}
									// initialValues={this.getInitialValues()}
									// listMovie={this.state.movies}
									// listRoom={this.state.rooms}
									/>
								)}
							/>
							<Route
								path="/admin-panel/add-user-info"
								render={() => <AddUserInfo />}
							/>
						</Switch>
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		adminAuthState: state.adminAuth,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		adminSignOutFunc: () => {
			dispatch(adminSignOut())
		},
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminPanel)
