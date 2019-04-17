import React, { Component } from 'react';
import Rooms from '../../components/hallComponents/Rooms/Rooms.js';
import SelectPanel from '../../components/hallComponents/SelectPanel/SelectPanel.js';
import { connect }   from 'react-redux';
import Header from '../../components/Header';
import * as actions from '../../actions/actionHall.js';
import axios from "axios";
import { Redirect } from "react-router-dom";
import MiniHeader from '../../components/hallComponents/MiniHeader.js';
import * as actionsRN from '../../actions/roomNames.js';
import colorTrans from '../../_utils/colorTrans.js';

const mapStateToProps = state => ( { currentSession: state.curSession, movies: state.movie.data, roomNames: state.roomNames.data } )

class HallPage extends Component {
  state = {
    room: null,
    price: 0,
    movieName: '',
    movieDate: null
  }
  getCurrentMovieName = id => {
    if ( !this.props.movies ) return
    return this.props.movies.find ( el => el._id === id ).title
  }

  getCurrentRoomName = id => {
    if ( !this.props.roomNames ) return
    return this.props.roomNames.rooms.find ( el => el._id === id ).name
  }
  componentDidMount () {
    console.log(this.props.currentSession,"curSession")
    console.log(this.props.movies,'movie')
    if ( !this.props.currentSession.data ) return
    this.props.setPrice( this.props.currentSession.data.costs )
    this.props.getRoomNamesRequest()
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
    console.log(this.state.movieName,'this.state.movieName', this.props.roomNames, 'rn')
    if ( !this.props.currentSession.data ) return ( <Redirect to='/' /> )
    if ( !this.state.room )return ( <div className = 'room'>Loading...</div> )
    return (
      <div className = 'hall-page'>
        <Header title={ 'Myplex' } />
        <MiniHeader nameMovie = { this.state.movieName } dateSession = { this.state.movieDate }
                    nameRoom = { colorTrans (this.getCurrentRoomName( this.props.currentSession.data.room )) + " зал" } />
        <div className = 'hall-content'>
          <Rooms room = { this.state.room } price = { this.state.price }/>
          <SelectPanel />
        </div>
      </div>
    )
  }
}
HallPage = connect ( mapStateToProps, Object.assign( actions, actionsRN ) )( HallPage )
export default HallPage
