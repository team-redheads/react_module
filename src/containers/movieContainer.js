import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getMovieRequest } from '../actions/actionMovie'
import { getSessionRequest } from '../actions/actionSession'

import Header from '../components/Header'
import MovieGallery from '../components/movieGallery'

class MovieContainer extends Component {
	componentDidMount() {
		this.props.getMovieRequest();
		this.props.getSessionRequest()
	}
	render() {
		const { movie, session } = this.props;

		return (
			<React.Fragment>
				<Header title={'Myplex'} />
				<MovieGallery movie={movie} session={session} />
			</React.Fragment>
		)
	}
}
const mapStateToProps = state => ({
	movie: state.movie.data,
	session: state.session.data,
	// singInForm: state.form.signIn
})
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getMovieRequest,
			getSessionRequest,
		},
		dispatch
	)
MovieContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieContainer);

export default MovieContainer
