import React, { Component } from 'react';
import Header from '../components/Header.js';
import SelectPanel from '../components/hallComponents/SelectPanel/SelectPanel.js';
import { connect }   from 'react-redux';
import Poster from '../components/MoviePoster.js';
import moment from 'moment';
import InfoCard from '../components/hallComponents/InfoCard.js';

let mapStateToProps = state => ( { currentSession: state.curSession, movies: state.movie.data } )

let BuyTickets = p => {
  let getCurrentMovie = id => (
    p.movies.find( el => el._id === id )
  )
  let movie = getCurrentMovie(p.currentSession.data.movie)
    return(
      <div className = 'buy-main'>
        <Header title={ 'Multiplex' } />
        <div className = 'main-cont'>
          <div className = 'buy-poster'>
            <img src = { movie.poster } alt = { movie.title }/>
           </div>
          <div className = 'buy-content'>
            <InfoCard title = { movie.title} info = 'Фильм'/>
            <InfoCard title = { moment( p.currentSession.data.date ).format('LLLL') }
                      info = "время и место" />
          </div>
          <div className = 'buy-select'><SelectPanel simple = {true} /></div>
        </div>
      </div>
    )
}
BuyTickets = connect ( mapStateToProps, {} )( BuyTickets )
export default BuyTickets
