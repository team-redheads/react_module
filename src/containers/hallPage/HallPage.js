import React, { Component } from 'react';
import Rooms from '../../components/hallComponents/Rooms/Rooms.js';
import SelectPanel from '../../components/hallComponents/SelectPanel/SelectPanel.js';
import { connect }   from 'react-redux';
import Header from '../../components/Header';
import * as actions from '../../actions/actionHall.js';
import axios from "axios";
import { Redirect } from "react-router-dom";
import MiniHeader from '../../components/hallComponents/MiniHeader.js'

let mapStateToProps = state => ( { currentSession: state.curSession, movies: state.movie.data } )

class HallPage extends Component {
  state = {
    room: null,
    price: 0,
    movieName: '',
    movieDate: null,
  }
  getCurrentMovieName = id => (
    this.props.movies.find( el => el._id === id ).title
  )
  // getAllData = async () => {
  //
  // }
  componentDidMount () {
    console.log(this.props.currentSession,"curSession")
    console.log(this.props.movies,'movie')
    if ( !this.props.currentSession.data ) return
    this.props.setPrice( this.props.currentSession.data.costs )
    axios({
        url: `http://subdomain.entony.fs.a-level.com.ua/api/movie/space?room=${this.props.currentSession.data.room}`,
      }).then( response => {
          this.setState( {
            room: response.data,
            price: this.props.currentSession.data.costs,
            movieName: this.getCurrentMovieName(this.props.currentSession.data.movie),
            movieDate: this.props.currentSession.data.date
          } )
          console.log(response,"roomsData")
      } )
        .catch( err => console.error( err.message ) )
  }
  render (){
    console.log(this.state.movieName,'this.state.movieName')
    if ( !this.props.currentSession.data ) return ( <Redirect to='/' /> )
    if ( !this.state.room )return ( <div className = 'room'>Loading...</div> )
    return (
      <div className = 'hall-page'>
        <Header title={ 'Multiplex' } />
        <MiniHeader nameMovie = { this.state.movieName } dateSession = { this.state.movieDate } nameRoom = 'green' />
        <div className = 'hall-content'>
          <Rooms room = { this.state.room } price = { this.state.price }/>
          <SelectPanel />
        </div>
      </div>
    )
  }
}
HallPage = connect ( mapStateToProps, actions )( HallPage )
export default HallPage
