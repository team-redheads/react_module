import React, { Component } from 'react';
import moment from 'moment';
import InfoCard from './InfoCard.js'

export default props => (
  <div className = 'miniHeader'>
    <InfoCard title = { props.nameRoom }/>
    <InfoCard title = { props.nameMovie } info = { moment(props.dateSession ).format('LLLL') } />
  </div>
)
