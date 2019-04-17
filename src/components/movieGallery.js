import React, { Component } from 'react';
import { Icon } from 'antd';
import Slider from "react-slick";

import moment from 'moment';
import {nowDate} from "../_utils/nowDate";
import { dynamicSort } from "../_utils/dynamicSort";

import MovieItem from './movieItem';

const SampleNextArrow = props =>  {
    const { onClick } = props;
    return (
        <div className='arrow-next' onClick={onClick}>
            <Icon type="right" />
        </div>
    );
};
const SamplePrevArrow = props => {
    const { onClick } = props;
    return (
        <div className='arrow-prev' onClick={onClick}>
            <Icon type="left" />
        </div>
    );
};

class MovieGallery extends Component {
    render() {
        const { movie, session } = this.props;

        const settings = {
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        // infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const rentMovie = [];
        const nowData = moment(nowDate).format("YYYY MM DD"); // сегодняшний день

        movie && movie.sort(dynamicSort("rentStart")).map( (movie) => {
            const rentEnd = moment(movie.rentEnd).format("YYYY MM DD");
            if  (nowData <= rentEnd )  rentMovie.push(movie);
            return rentMovie
        });

        const rentMovieItems = rentMovie && rentMovie.map( (movie, index) => {
            const rentStart = moment(movie.rentStart).format("YYYY MM DD");
            const rentEnd = moment(movie.rentEnd).format("YYYY MM DD");

            return (
                (nowData >= rentStart && nowData <= rentEnd )  ?
                    <MovieItem key={ index } movie={ movie } session={ session } /> :
                    <MovieItem key={ index } movie={ movie } rentStart={ movie.rentStart }  />
            )
        });


        return (
            <div className="movie-wrapper" >
                <div className="block-movie" >
                    <Slider {...settings}>
                        { rentMovieItems }
                    </Slider>
                </div>
            </div>
        );
    }
}
export default MovieGallery;