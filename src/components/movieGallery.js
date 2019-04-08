import React, { Component } from 'react';
import { Icon } from 'antd';
import Slider from "react-slick";

import moment from 'moment';

import MovieItem from './movieItem';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='arrow-next' onClick={onClick}>
            <Icon type="right" />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='arrow-prev' onClick={onClick}>
            <Icon type="left" />
        </div>
    );
}

class MovieGallery extends Component {
    renderMovies () {
        const { movie, session } = this.props;

        const movieItems = movie && movie.map( (movie, index) => {
            const nowData = moment().format("YYYY MM DD"); // сегодняшний день

            const rentStart = moment(movie.rentStart).format("YYYY MM DD");
            const rentEnd = moment(movie.rentEnd).format("YYYY MM DD");

            return (
                (nowData >= rentStart && nowData <= rentEnd )  ?
                    <MovieItem key={ index } movie={ movie } session={ session } /> :
                    <MovieItem key={ index } movie={ movie } rentStart={ movie.rentStart }  />
            )
        });
        return movieItems
    };

    render() {
        const settings = {
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div className="movie-wrapper" >
                <div className="block-movie" >
                    <Slider {...settings}>
                        { this.renderMovies() }
                    </Slider>
                </div>
            </div>
        );
    }
}
export default MovieGallery;