import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

import { nowDay, nowTime } from "../utils/nowDate";
import { dynamicSort } from "../utils/dynamicSort";

import moment from 'moment';

import SessionItem from './sessionItem';

class MovieItem extends Component {
    render() {
        const { movie , session } = this.props;

        const sessionItem = session && session.sort(dynamicSort("date")).map( (session, index) => {
            const dateDay = moment(session.date).format('dddd' );
            const dateTime = moment(session.date).format('LT' );

            return (
                dateDay === nowDay &&
                session.movie === movie._id &&
                <SessionItem key={ index }
                             session={ session }
                             dateTime={ dateTime }
                             nowTime={ nowTime }
                />
            );
        });

        const url = encodeURIComponent(movie.trailer);
        return (
            <li className="block-movie__item" style={{backgroundImage: `url('${movie.poster}')`}} >
                <span className="block-movie__info">
                        <span className="block-movie__header details">
                            <Link to={`/movie/${movie._id}`} className="details__link">
                                <span> <Icon type="info-circle" className="details__icon" /></span>
                                <span > Details </span>
                            </Link>
                            <Link to={`/trailer/${url}`} className="details__link">
                                <span> <Icon type="play-circle" className="details__icon" /> </span>
                                <span> Trailer </span>
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
            </li>
        );
    }
}

export default MovieItem;