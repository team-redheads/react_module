import React, { Component } from 'react';
import Header from '../components/Header.js';
import SelectPanel from '../components/hallComponents/SelectPanel/SelectPanel.js';
import { connect }   from 'react-redux';
// import Poster from '../components/MoviePoster.js';
import moment from 'moment';
import InfoCard from '../components/hallComponents/InfoCard.js';
import { Redirect } from "react-router-dom";
import AxiosInstance from '../_utils/axiosConfig.js';
import Information from '../components/information.js'

let mapStateToProps = state => ( { currentSession: state.curSession, movies: state.movie.data, places: state.places.places } )

class BuyTickets extends Component {
  state = {
    buy: false
  }
  getCurrentMovie = id => (
    this.props.movies.find( el => el._id === id )
  )
  clickHanler = event => {
    this.setState({ buy:true })
    this.props.places.map( el => {
      console.log("el",el);
      AxiosInstance ( {
        method: 'PUT',
        url: `movie/space/${ el._id }`,
        data: { free: true }
      } )
    })
  }
  bookedFunc = bool => {
    this.props.places.map( el => {
      console.log("el",el);
      AxiosInstance ( {
        method: 'PUT',
        url: `movie/space-booked/${ el._id }`,
        data: { booked: bool }
      } )
    })
  }
  componentWillUnmount (){
    if ( !this.state.buy ) this.bookedFunc( false )
  }
  componentDidMount (){
    this.bookedFunc( true )
  }
  render (){
    if ( !this.props.currentSession.data ) return <Redirect to = '/' />
    let movie = this.getCurrentMovie(this.props.currentSession.data.movie)
     return(
      <div className = 'buy-main'>
        <div className = 'buy-layout'>
          <Header title={ 'Myplex' } />
          <div className = 'main-cont'>
            <div className = 'buy-poster'>
              <img src = { movie.poster } alt = { movie.title }/>
             </div>
            <div className = 'buy-content'>
              <InfoCard title = { moment( this.props.currentSession.data.date ).format('LLLL') }
                        info = "время и место" />
              <Information movie = { this.getCurrentMovie(this.props.currentSession.data.movie) } />
            </div>
            <div className = 'buy-select'><SelectPanel simple = {true} />
              <button onMouseDown = {this.clickHanler} className='buy-btn'>Купить</button></div>
          </div>
        </div>
      </div>
    )}
}
BuyTickets = connect ( mapStateToProps, {} )( BuyTickets )
export default BuyTickets
