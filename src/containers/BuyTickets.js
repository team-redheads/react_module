import React, { Component } from 'react';
import Header from '../components/Header.js';
import SelectPanel from '../components/hallComponents/SelectPanel/SelectPanel.js';
import { connect }   from 'react-redux';
import moment from 'moment';
import InfoCard from '../components/hallComponents/InfoCard.js';
import { Redirect } from "react-router-dom";
import AxiosInstance from '../_utils/axiosConfig.js';
import Information from '../components/information.js';
import { buyTicketsRequest } from '../actions/tickets.js';
import TicketsWindow from '../components/hallComponents/TicketsWindow.js';
import { getUserByIdRequest } from '../actions/actionUser.js'

const mapStateToProps = state => ({
  currentSession: state.curSession,
  movies: state.movie.data,
  places: state.places.places,
  tickets: state.tickets,
  user: state.user.data,
  roomNames: state.roomNames.data,
})

class BuyTickets extends Component {
  state = {
    buy: false
  }
  getCurrentRoomName = id => {
    if ( !this.props.roomNames ) return
    return this.props.roomNames.rooms.find ( el => el._id === id ).name
  }
  getCurrentMovie = id => (
    this.props.movies.find( el => el._id === id )
  )
  clickHanler = event => {
    this.setState({ buy:true })
    this.props.places.map( el => {
      console.log("elb",el);
      this.props.buyTicketsRequest(el)
    })
  }
  bookedFunc = bool => {
    this.props.places.map( el => {
      console.log("elbook",el);
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
    this.props.getUserByIdRequest(localStorage.getItem('user'))
  }
  render (){
    console.log(this.props.tickets, 'this.props.tickets', this.props.user)
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
                        info = "время и место"
                        white = {true} />
              <Information movie = { this.getCurrentMovie(this.props.currentSession.data.movie) } />
            </div>
            <div className = 'buy-select'><SelectPanel simple = {true} />
              <button onMouseDown = {this.clickHanler} className='buy-btn'>Купить</button></div>
          </div>
        </div>
        {this.state.buy ? <TicketsWindow tickets = {this.props.tickets.purchased}
                                         errTickets = {this.props.tickets.notPurchased}
                                         user = {this.props.user.local ? (this.props.user.local.firstName + ' ' + this.props.user.local.lastName) : false}
                                         movieName = {movie.title}
                                         movieDate = {moment( this.props.currentSession.data.date ).format('D M YYYY')}
                                         movieTime = {moment( this.props.currentSession.data.date ).format('HH mm')}
                                         hallName = {this.getCurrentRoomName( this.props.currentSession.data.room )}
                          /> : false}
      </div>
    )}
}
BuyTickets = connect ( mapStateToProps, {buyTicketsRequest, getUserByIdRequest} )( BuyTickets )
export default BuyTickets
