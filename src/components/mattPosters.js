import React, { Component } from 'react';

const posters = [
    'http://pics.kinokadr.ru/films/w/wolverine/wolverine.jpg',
    'https://i.pinimg.com/originals/4b/01/51/4b0151a28368c65412db0d2bf906dc35.jpg',
    'https://cs8.pikabu.ru/post_img/big/2017/02/19/4/1487481943128165538.jpg',
    'https://art-apple.ru/albums/harry-potter/poster1.jpg',
    'http://fantmir.ru/uploads/posts/2016-03/1458334832_warcraft_poster_0.jpg',
    'https://cdn.eksmo.ru/v2/ITD000000000843983/COVER/cover1__w600.jpg',
    'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/2/2/7/8171722/8c22434b47452a3055495f8dd46fac7c.jpeg',
    'http://geekcity.ru/wp-content/uploads/2014/04/X-Men-Days-of-Future-Past-Wolverine-and-Mystique-poster.jpg',
    'https://media.kg-portal.ru/movies/p/piratesofthecaribbean/posters/piratesofthecaribbean_3.jpg',
    'https://ovideo.ru/images/gallery/0017/5810/0005.jpg',
    'https://xage.ru/media/uploads/2008/2/posteryi-luchshih-filmov-poluchivshih-oskar/posteryi-luchshih-filmov-poluchivshih-oskar_1.jpg',
    'https://static.kinoafisha.info/k/movie_posters/1920x1080/upload/movie_posters/7/7/0/7922077/fc1d56257d79df6711063c6f83aff191.jpg',
];

class MattPosters extends Component{
    render() {
        const posterItem = posters.map((poster,index) =>{
            return (
                <div key={index} className='poster-item' style={{backgroundImage: `url('${ poster }')`}}>
                    {/*<img src={`${poster}`} alt="" className='poster-item__image'/>*/}
                </div>
            )
        });
        return (
            <>
                {posterItem}
            </>
        );
    }
}
export default MattPosters;