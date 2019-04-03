import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Icon} from "antd";


class MoviePoster extends Component{
    render() {
        const { poster, trailer, title} = this.props;
        const url = encodeURIComponent(trailer);
        return (
            <div className='block'>
                <div className="block-poster">
                    <img src={`${ poster }`} alt={`Poster ${ title }`} className="block-poster__img"/>
                </div>
                <div className="block-btn-trailer">
                    <Link to={`/trailer/${url}`} className="block-btn-trailer__link"> <Icon type="caret-right" /> Смотреть трейлер </Link>
                </div>
            </div>
        );
    }
}
export default MoviePoster;