import React, { Component } from 'react';
import moment from 'moment';
import {dynamicSort} from "../_utils/dynamicSort";
import { Icon } from 'antd';
import { Link } from "react-router-dom";

export default class SoonWrapper extends Component{
    renderMovies = () => {
        const { movie } = this.props;
        const nowData = moment().format("YYYY MM DD"); // сегодняшний день
        const resRentSt = [];

        movie && movie.sort(dynamicSort('rentStart')).map( (movie, index, arr) => {
            const rentStart = moment(movie.rentStart).format("YYYY MM DD");
            const rentEnd = moment(movie.rentEnd).format("YYYY MM DD");
            return !(nowData >= rentStart && nowData <= rentEnd )  &&
                resRentSt.indexOf(movie.rentStart.split('T')[0]) === -1 &&
                resRentSt.push(movie.rentStart.split('T')[0])
        });
        const dayList = resRentSt.map( (day, index) => {
            return (
                <div className='soon-list' key={index}>
                    <div className='soon-list__date'>
                        <span className='soon-list__date-day'>{ moment(day).format('dddd,') }</span>
                        <span className='soon-list__date-date'>{ moment(day).format('DD MMMM') }</span>
                    </div>
                    <div className='soon-list__movies'>
                        {
                            movie && movie.sort(dynamicSort('rentStart')).map((movie,ind) => {
                                const url = encodeURIComponent(movie.trailer);
                                return movie.rentStart.split('T')[0] === day &&
                                    <div key={ind} className='soon-list__movies-item' >
                                        <Link to={`/movie/${movie._id}`} className="soon-list__movies-poster" style={{backgroundImage: `url('${movie.poster}')`}}></Link>
                                        <Link to={`/trailer/${url}`} className="soon-list__movies-trailer"><Icon type="play-circle" className="icon-trailer" /></Link>
                                        <Link to={`/movie/${movie._id}`} className="soon-list__movies-title">{movie.title}</Link>
                                    </div>
                            })
                        }
                    </div>
                </div>
            )
        });

        return dayList
    };
    render() {
        return (
            <div className='soon-wrapper'>
                <div className='soon-title'> <h2>Скоро в кино</h2> </div>
                {this.renderMovies()}
            </div>
        );
    }
}
