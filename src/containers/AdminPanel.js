import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { Switch, Route } from 'react-router-dom'
import moment from 'moment'

import ModalWindow from '../components/ModalWindow'

import { adminSignOut } from '../actions/adminAuth'
import {
	adminAddMovie,
	adminOnLoadPoster,
	adminDellMovie,
	adminGetMovie,
	adminGetRoom,
	adminGetUser,
	adminPostSession,
	adminPutMovie,
	clearPoster,
} from '../actions/adminPanel'

import { checkExp, takeId, checkRole } from '../_utils/checkExp'

import Header from '../components/Header'
import HeaderMain from '../components/HeaderMain'

import AllMovies from '../components/AllMovies.js'
import AddMovie from '../components/AddMovie.js'
import AddMovieInfo from '../components/AddMovieInfo.js'
import EditMovie from '../components/EditMovie'

class AdminPanel extends Component {
	state = {
		user: {
			email: null,
			firstName: null,
			lastName: null,
		},
		render: true,
	}

	componentDidMount() {
		this.props.history.push('/admin-panel/all-movies')
		const token = localStorage.getItem('token')

		const {
			adminGetMovieFunc,
			adminGetUserFunc,
			adminGetRoomFunc,
		} = this.props

		adminGetMovieFunc()
		adminGetUserFunc(takeId(token))
		adminGetRoomFunc()

		if (!checkExp(token)) {
			this.props.history.push('/admin-panel/auth')
		}

		if (checkRole(token)) {
			this.props.history.push('/')
		}
	}

	renderModal = () => {
		setTimeout(() => this.setState({ render: false }), 3000)
		this.setState({ render: true })
	}

	signOut = () => {
		localStorage.removeItem('token')
		this.props.adminSignOutFunc()
	}

	valueAddMovie = values => {
		const { posterLink } = this.props.adminPanelState.addMovie
		values.poster = posterLink

		// console.log('-----values addMovie', values)
		this.props.adminAddMovieFunc(JSON.stringify(values))
		this.renderModal()
	}

	valueAddSession = values => {
		this.props.adminPostSessionFunc(JSON.stringify(values))
		this.renderModal()
	}

	valuePutMovie = (values, id) => {
		console.log(values, id)
		this.props.adminPutMovieFunc(JSON.stringify(values), id)
		this.renderModal()
	}

	dellMovie = value => {
		this.props.adminDellMovieFunc(value)
		this.renderModal()
	}

	getInitialValues = () => {
		return {
			date: moment().format('YYYY-MM-DDTHH:mm'),
		}
	}

	render() {
		console.log('-----props adminPanelState', this.props.adminPanelState)
		console.log('-----props adminAuthState', this.props.adminAuthState)

		const {
			adminAddMovieFunc,
			adminOnLoadPosterFunc,
			clearPosterFunc,
			adminPanelState: {
				addMovie,
				dellMovie,
				getMovie: { movie },
				getRoom,
				getUser: { user },
				postSession: { message },
				putMovie,
			},
		} = this.props

		const { render } = this.state

		return (
			<Fragment>
				{addMovie.movie && render ? (
					<ModalWindow text={addMovie.movie} />
				) : null || (dellMovie.movie && render) ? (
					<ModalWindow text={dellMovie.movie} />
				) : null || (message && render) ? (
					<ModalWindow text={message} />
				) : null || (putMovie.message && render) ? (
					<ModalWindow text={putMovie.message} />
				) : null}

				<Header signOutFunc={this.signOut} />
				<div className="main-block">
					<HeaderMain userInfo={user} />
					<div className="main-block__content">
						<Switch>
							<Route
								path="/admin-panel/all-movies"
								render={() =>
									movie ? (
										<AllMovies
											adminGetMovieProps={movie}
											adminDellMovieFunc={this.dellMovie}
										/>
									) : null
								}
							/>
							<Route
								path="/admin-panel/add-movie"
								render={() => (
									<AddMovie
										adminAddMovieFunc={adminAddMovieFunc}
										adminOnLoadPosterFunc={
											adminOnLoadPosterFunc
										}
										valueAddMovie={this.valueAddMovie}
										posterLink={addMovie.posterLink}
									/>
								)}
							/>
							<Route
								path="/admin-panel/add-movie-info"
								render={() => (
									<AddMovieInfo
										adminGetRoomProps={getRoom.room}
										adminGetMovieProps={movie}
										initialValues={this.getInitialValues()}
										valueAddSession={this.valueAddSession}
									/>
								)}
							/>
							<Route
								path="/admin-panel/edit-movie"
								render={() => (
									<EditMovie
										adminOnLoadPosterFunc={
											adminOnLoadPosterFunc
										}
										adminGetMovieProps={movie}
										valuePutMovie={this.valuePutMovie}
                                        posterLink={addMovie.posterLink}
                                        clearPosterFunc={clearPosterFunc}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = store => {
	return {
		adminAuthState: store.adminAuth,
		adminPanelState: store.adminPanel,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		adminSignOutFunc: () => {
			dispatch(adminSignOut())
		},
		adminAddMovieFunc: payload => {
			dispatch(adminAddMovie(payload))
		},
		adminOnLoadPosterFunc: payload => {
			dispatch(adminOnLoadPoster(payload))
		},
		adminDellMovieFunc: payload => {
			dispatch(adminDellMovie(payload))
		},
		adminGetMovieFunc: () => {
			dispatch(adminGetMovie())
		},
		adminGetRoomFunc: () => {
			dispatch(adminGetRoom())
		},
		adminGetUserFunc: payload => {
			dispatch(adminGetUser(payload))
		},
		adminPostSessionFunc: payload => {
			dispatch(adminPostSession(payload))
		},
		adminPutMovieFunc: (payload, id) => {
			dispatch(adminPutMovie(payload, id))
		},
		clearPosterFunc: () => {
			dispatch(clearPoster())
		},
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminPanel)
