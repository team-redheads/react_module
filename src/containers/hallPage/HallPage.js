import React, { Component } from 'react';
import Rooms from '../../components/hallComponents/Rooms/Rooms.js';
import SelectPanel from '../../components/hallComponents/SelectPanel/SelectPanel.js';
import './index.css'

export default props => (
  <div className = 'hall-page'>
    <Rooms />
    <SelectPanel />
  </div>
)
