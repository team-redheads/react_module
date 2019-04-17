import React, { Component } from 'react';
import WarningIcon from './WarningIcon.js';
import logo from '../../_img/logo2.svg'

export default class TiketForm extends Component {
  render () {
    const {movieName, userName, time, row, place,date, hall,error} = this.props
      return (
        <div className ="cardWrap">
        <div className ="card cardLeft">
          <h1>{error ? 'ERROR' : 'MYPLEX'}</h1>
          <div className ="title">
            <h2>{movieName}</h2>
            <span>movie</span>
          </div>
          <div className ="name">
            <h2>{userName}</h2>
            <span>name</span>
          </div>
          <div className ="seat">
            <h2>{row}</h2>
            <span>row</span>
          </div>
          <div className ="seat">
            <h2>{place}</h2>
            <span>seat</span>
          </div>
          <div className ="time">
            <h2>{time}</h2>
            <span>time</span>
          </div>
          <div className ="time">
            <h2>{date}</h2>
            <span>date</span>
          </div>

        </div>
        <div className ="card cardRight">
          <div className ="logo">
           {error ? <WarningIcon /> : <img src={logo} alt="logo" width = {24} />}
          </div>
          <div className ="number nameHall">
            <h3>{hall}</h3>
            <span>hall</span>
          </div>
          <div className ="number">
            <h3>{row}</h3>
            <span>row</span>
          </div>
          <div className ="number">
            <h3>{place}</h3>
            <span>seat</span>
          </div>
        </div>
      </div>
    )
  }
}
