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

const mapStateToProps = state => ( {
  currentSession: state.curSession,
  movies: state.movie.data,
  roomNames: state.roomNames.data,
  places: state.spaceShadow,
  price: state.places.price
} )

class HallPage extends Component {
  state = {
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
    if ( !this.props.currentSession.data ) return
    this.props.getRoomNamesRequest()
    this.props.getPlacesRequest( this.props.currentSession.data._id )
    this.setState( {
      movieName: this.getCurrentMovieName(this.props.currentSession.data.movie),
      movieDate: this.props.currentSession.data.date
    } )
  }
  render (){
    if ( !this.props.currentSession.data ) return ( <Redirect to='/' /> )
    if ( this.props.places.isFetching || this.props.places.initial ) return ( <div className = 'room'>Loading...</div> )
    if ( this.props.places.error ) return ( <div className = 'room'>error</div> )
    return (
      <div className = 'hall-page'>
        <Header title={ 'Myplex' } />
        <MiniHeader nameMovie = { this.state.movieName } dateSession = { this.state.movieDate }
                    nameRoom = { colorTrans (this.getCurrentRoomName( this.props.currentSession.data.room )) + " зал" } />
        <div className = 'hall-content'>
          <Rooms room = { this.props.places.places } price = { this.props.price }/>
          <div className = "selectFix"><SelectPanel /></div>
        </div>
      </div>
    )
  }
}
HallPage = connect ( mapStateToProps, Object.assign( actions, actionsRN ) )( HallPage )
export default HallPage
