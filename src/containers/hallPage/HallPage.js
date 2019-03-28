import React  from 'react';
import Rooms from '../../components/hallComponents/Rooms/Rooms.js';
import SelectPanel from '../../components/hallComponents/SelectPanel/SelectPanel.js';
import {connect}   from 'react-redux';

let mapStateToProps = state => ({ currentSession: state.curSession })

let namezator = {
  "5c9d41d2952777ad64e183df": '#c5f7b4',
  "5c9d43e6952777ad64e19243":'#f8f9b8'
};

let HallPage = props => {
  console.log(props.currentSession,"props.curSession");
  let roomeId = props.currentSession.data ? props.currentSession.data.room : false;
  return (
    <div className = 'hall-page' style = { {backgroundColor: namezator[roomeId]} }>
      <Rooms />
      <SelectPanel />
    </div>
  )
}
HallPage = connect (mapStateToProps, {})(HallPage);
export default HallPage
