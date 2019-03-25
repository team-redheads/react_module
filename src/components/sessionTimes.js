import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import * as actionHall from "../actions/actionHall.js"

class SessionTimes extends Component {
  clickHanler = s => event => {
    this.props.setCurSession( s )
  }
    render() {
        const { time, session } = this.props;
        console.log('time',time, this.props);
        return (
            <Link to = '/hall' className = "block-session__link" onClick = {this.clickHanler(session)}>
                <span className = "block-session__times-item">
                    {time}
                </span>
            </Link>
        );
    }
}

SessionTimes = connect ( () =>({}), actionHall )( SessionTimes )
export default SessionTimes;
