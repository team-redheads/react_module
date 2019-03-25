import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actionHall from "../actions/actionHall.js"

class SessionItem extends Component{
  clickHanler = s => event => {
    this.props.setCurSession( s )
  }
    render() {
      console.log("что это?")
        const { session, dateTime, nowTime } = this.props;
        // console.log('---- SessionItems session: ', session);
        // console.log('---- SessionItems dateTime: ', dateTime);
        // console.log('---- SessionItems nowTime: ', nowTime);
        // let time = date[4];
        // // console.log('---- time: ', time);
        // time = time.substr(0,time.length-3);
        //
        // let todayTime = nowDate.substr(0,nowDate.length-3);
        // // console.log('---- todayTime: ', todayTime);
        //

        return (
            dateTime >= nowTime &&
            <>
                <Link className='session__link' to='/hall' onClick = {this.clickHanler( session )}> { dateTime } </Link>
                {/*<div className="session__price"> { session.price } </div>*/}
            </>
        );
    }
}

SessionItem = connect ( () => ({}), actionHall )(SessionItem)

export default SessionItem;
