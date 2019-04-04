import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getMovieByIdRequest } from '../actions/actionMovie'
import { getSessionByMovieIdRequest } from '../actions/actionSession'

import Header from '../components/Header'
import Sessions from '../components/sessions'
import Poster from '../components/MoviePoster'
import Information from '../components/information'

class DetailsMoviePageContainer extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getMovieByIdRequest(id);
		this.props.getSessionByMovieIdRequest(id);
	}
	render() {
		const { movie_by_id, session_by_movie_id } = this.props;
		return (
			<React.Fragment>
				{movie_by_id && session_by_movie_id && (
					<React.Fragment>
						<Header title={'Multiplex'} />
						<div className="block-info">
							<div className="block-info__bg-color">
								<Poster
									poster={movie_by_id[0].poster}
									trailer={movie_by_id[0].trailer}
									title={movie_by_id[0].title}
								/>
								<Information movie={movie_by_id[0]} />
								<Sessions session={session_by_movie_id} />
							</div>
						</div>
					</React.Fragment>

				)}
			</React.Fragment>
		)
	}
}
const mapStateToProps = state => ({
	movie_by_id: state.movie_by_id.data,
	session_by_movie_id: state.session_by_movie_id.data,
	// sessions: state.sessions
	// singInForm: state.form.signIn
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getMovieByIdRequest,
			getSessionByMovieIdRequest,
		},
		dispatch
	);

DetailsMoviePageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DetailsMoviePageContainer);

export default DetailsMoviePageContainer
