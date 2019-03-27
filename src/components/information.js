import React, { Component } from 'react';
import moment from 'moment';

class Information extends Component {
    render() {
        const { movie } = this.props;
        // console.log('movie', movie);
        return (
            <div className="block-information">
                <div className="block-title">
                    <h1>{ movie.title }</h1>
                </div>

                <div className="block-list-info">
                    <li className="block-list-info__li">
                        <span className="block-list-info__key">Возраст: </span>
                        <span className="block-list-info__value">{`${movie.age}+`} </span>
                    </li>

                    <li className="block-list-info__li">
                        <span className="block-list-info__key">Период проката: </span>
                        <span className="block-list-info__value">{`${moment(movie.rentStart).format('DD.MM.YYYY')} - ${moment(movie.rentEnd).format('DD.MM.YYYY')}`} </span>
                    </li>

                    <li className="block-list-info__li">
                        <span className="block-list-info__key">Язык: </span>
                        <span className="block-list-info__value">{`${movie.language}`} </span>
                    </li>

                    <li className="block-list-info__li">
                        <span className="block-list-info__key">Жанр: </span>
                        <span className="block-list-info__value">{`${movie.genre.join(', ')}`} </span>
                    </li>

                    <li className="block-list-info__li">
                        <span className="block-list-info__key">Длительность: </span>
                        <span className="block-list-info__value">{`${movie.long}`} </span>
                    </li>

                    <li className="block-list-info__li">
                        <span className="block-list-info__key">Производство: </span>
                        <span className="block-list-info__value">{`${movie.country.join(', ')}`} </span>
                    </li>

                    <li className="block-list-info__li">
                        <span className="block-list-info__key">В главных ролях: </span>
                        <span className="block-list-info__value">{`${movie.actors.join(', ')}`} </span>
                    </li>
                </div>
                <div className="block-description">
                    { movie.description }
                </div>
            </div>
        );
    }
}

export default Information;