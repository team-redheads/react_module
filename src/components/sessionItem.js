import React, {Component} from "react";
import {Link} from "react-router-dom";


class SessionItem extends Component{
    render() {
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
                <Link className='session__link' to='/'> { dateTime } </Link>
                {/*<div className="session__price"> { session.price } </div>*/}
            </>
        );
    }
}

export default SessionItem;