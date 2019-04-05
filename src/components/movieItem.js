import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

import { nowDay, nowTime } from "../_utils/nowDate";
import { dynamicSort } from "../_utils/dynamicSort";
import * as actionHall from "../actions/actionHall.js";

import moment from 'moment';

// import SessionItem from './sessionItem';
import {connect} from "react-redux";

class MovieItem extends Component {
    clickHanler = s => event => {
        this.props.setCurSession( s )
    }
    render() {
        const { movie , session } = this.props;

        const sessionItem = session && session.sort(dynamicSort("date")).map( (session, index) => {
            const dateDay = moment(session.date).format('dddd' );
            const dateTime = moment(session.date).format('LT' );

            return (
                dateDay === nowDay &&
                session.movie === movie._id &&
                dateTime >= nowTime &&
                <React.Fragment>
                    <Link className='session__link' to='/hall' onClick = {this.clickHanler( session )}> { dateTime } </Link>
                </React.Fragment>

            );
        });

        const url = encodeURIComponent(movie.trailer);

        return (
            <div className="block-movie__item" style={{backgroundImage: `url('${movie.poster}')`}} >
                <span className="block-movie__info">
                        <span className="block-movie__header details">
                            <Link to={`/movie/${movie._id}`} className="details__link">
                                <span> <Icon type="info-circle" className="details__icon" /></span>
                                <span > Подробнее </span>
                            </Link>
                            <Link to={`/trailer/${url}`} className="details__link">
                                <span> <Icon type="play-circle" className="details__icon" /> </span>
                                <span> Трейлер </span>
                            </Link>
                        </span>
                        <span className="block-movie__session session">
                            <h2 className='session__title'> Расписание сеансов </h2>
                            <h3 className='session__title'> { nowDay } </h3>
                            <ul className='session__list'>
                                { sessionItem }
                            </ul>
                        </span>
                </span>
                <Link to={`/movie/${movie._id}`} className="details__link">
                    <span className="block-movie__title"> {movie.title} </span>
                </Link>
            </div>
        );
    }
}
MovieItem = connect ( () => ({}), actionHall )(MovieItem);

export default MovieItem;