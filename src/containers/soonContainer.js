import React, { Component } from 'react';
import { connect } from "react-redux";

import { getMovieRequest } from '../actions/actionMovie';

import SoonWrapper from '../components/soonWrapper';
import Header from '../components/Header';

class Soon extends Component{
    componentDidMount() {
        this.props.getMovieRequest();
    }
    render() {
        const { movie } = this.props;
        return (
            <React.Fragment>
                <Header title={'Скоро в прокате'} />
                <SoonWrapper movie={movie} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    movie: state.movie.data,
});

Soon = connect(
    mapStateToProps,
    { getMovieRequest }
)(Soon);

export default Soon;
