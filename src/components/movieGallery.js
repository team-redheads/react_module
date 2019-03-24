import React, { Component } from 'react';
import moment from 'moment';

import MovieItem from './movieItem';

class MovieGallery extends Component {
    render() {
        const { movie, session } = this.props;
        const movieItems = movie && movie.map( (movie, index) => {
            const nowData = moment().format("YYYY MM DD"); // сегодняшний день
            const rentStart = moment(movie.rentStart).format("YYYY MM DD");
            const rentEnd = moment(movie.rentEnd).format("YYYY MM DD");
            return ( nowData >= rentStart &&
                nowData <= rentEnd ) &&
                <MovieItem key={ index } movie={ movie } session={ session } />
            // return <MovieItem key={ index } movie={ movie } sessions={ sessions } />
        });
        return (
            <div className="films" >
                {/*<div className="arrow prev"> <Icon type="left" /> </div>*/}

                <div className="films__list" >
                    { movieItems }
                </div>

                {/*<div className="arrow next"><Icon type="right" /></div>*/}
            </div>
        );
    }
}
export default MovieGallery;