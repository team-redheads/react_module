import React, { Component } from 'react';
import Rooms from '../../components/hallComponents/Rooms/Rooms.js';
import SelectPanel from '../../components/hallComponents/SelectPanel/SelectPanel.js';
import {connect}   from 'react-redux';

let mapStateToProps = state => ({ currentSession: state.curSession })

let namezator = {
  "5c93fee1952777ad64970924": '#c5f7b4',
  "5c93fed5952777ad649708cf":'#f8f9b8'
}

let HallPage = props => {
  console.log(props.currentSession,"props.curSession")
  let roomeId = props.currentSession.data ? props.currentSession.data.room : false
  return (
    <div className = 'hall-page' style = { {backgroundColor: namezator[roomeId]} }>
      <Rooms />
      <SelectPanel />
    </div>
  )
}
HallPage = connect (mapStateToProps, {})(HallPage)
export default HallPage
