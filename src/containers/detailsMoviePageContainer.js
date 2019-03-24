import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import {connect} from "react-redux";

import { getMovieByIdRequest } from '../actions/actionMovie';
import { getSessionByMovieIdRequest } from "../actions/actionSession";

import DetailsMoviePage from '../components/detailsMoviePage'


class DetailsMoviePageContainer extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getMovieByIdRequest( id );
        this.props.getSessionByMovieIdRequest( id );
    }
    render() {
        const { movie_by_id, session_by_movie_id} = this.props;
        return (
            <>
                { movie_by_id && session_by_movie_id && <DetailsMoviePage movie={ movie_by_id[0] } session={ session_by_movie_id } /> }
            </>
        );
    }
}
const mapStateToProps = state => ({
    movie_by_id: state.movie_by_id.data,
    session_by_movie_id: state.session_by_movie_id.data
    // sessions: state.sessions
    // singInForm: state.form.signIn
});
const mapDispatchToProps = dispatch => bindActionCreators({
    getMovieByIdRequest,
    getSessionByMovieIdRequest
}, dispatch);

DetailsMoviePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsMoviePageContainer);

export default DetailsMoviePageContainer;