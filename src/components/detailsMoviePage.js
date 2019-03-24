import React, { Component } from 'react';

import Sessions from './sessions';
import Poster from './poster';
import Information from './information';


class DetailsMoviePage extends Component{
    render() {
        const { movie, session } = this.props;
        // console.log('---- DetailsMoviePage session: ', session);
        return (
            <div className='block-info'>
                <Poster poster={movie.poster} trailer={movie.trailer} title={movie.title}/>
                <Information  movie={ movie } />
                <Sessions session={ session } />
            </div>
        );
    }
}

export default DetailsMoviePage;