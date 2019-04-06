import React, { Component } from 'react';
import moment from 'moment';

export default props => (
  <div className = 'miniHeader'>
    <div className = 'names-header'>
      <p>{ props.nameRoom }</p>
    </div>
    <div className = 'names-header'>
      <p>{ props.nameMovie }</p>
      <p className = 'date'>{ moment(props.dateSession ).format('LLLL') }</p>
    </div>
  </div>
)
