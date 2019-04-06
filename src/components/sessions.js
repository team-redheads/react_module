import React, {Component} from 'react';

import {nowDate} from "../_utils/nowDate";
import {dynamicSort} from "../_utils/dynamicSort";

import moment from 'moment';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actionHall from "../actions/actionHall";

class Sessions extends Component {

    clickHanler = s => event => {
        this.props.setCurSession( s )
    }
    
    renderDayList = () => {
        const {session} = this.props;
        const resDays = [];

        session && session.sort(dynamicSort("date")).map(session => {
            const dateDay = session.date.split('T')[0];
            if (resDays.indexOf(dateDay) === -1) resDays.push(dateDay);
            return resDays
        });

        const dayList = resDays.map((day, index) => {
            // const nowDay_item = moment(nowDate).subtract(1, "day");
            // console.log('nowday_item     ', nowDay_item  );
            // console.log('day >= nowDate  ', moment(day).isAfter(nowDay_item) );
            return (
                moment(day).isAfter(nowDate) &&
                <li className="block-session__li" key={index}>
                    <span className="block-session__day"> { moment(day ).format('DD MMMM YYYY, dddd') } </span>
                    <span className="block-session__times">
                        {
                            session.sort(dynamicSort("date")).map((session, index) => {
                                const dateDay  = moment(session.date).format('DD MMMM YYYY, dddd');
                                const now_Date = moment(nowDate).format('DD MMMM YYYY, dddd');
                                const d        = moment(day).format('DD MMMM YYYY, dddd');
                                const dateTime = moment(session.date).format('LT');
                                return (
                                    dateDay >= now_Date &&
                                    dateDay.split(', ')[1] === d.split(', ')[1] &&
                                    <Link to='/hall'
                                          className="block-session__link" key={index}
                                          onClick = {this.clickHanler(session)}
                                    >
                                        <span className="block-session__times-item">
                                            {dateTime}
                                        </span>
                                    </Link>
                                )
                            })
                        }
                    </span>
                </li>
            );
        });
        return dayList;
    };

    render() {
        // const {session} = this.props;
        // const resDays = [];
        //
        // session && session.map(session => {
        //     const dateDay = moment(session.date).format('dddd, DD MMMM YYYY');
        //     if (resDays.indexOf(dateDay) === -1) resDays.push(dateDay);
        //     return resDays
        // });
        // // console.log('resDays', resDays);
        // const dayList = resDays.map((day, index) => {
        //     return <li className="block-session__li" key={index}>
        //         <span className="block-session__day"> {day} </span>
        //         <span className="block-session__times">
        //             {
        //                 session.sort(dynamicSort("date")).map((session, index) => {
        //                     const dateDay = moment(session.date).format('dddd');
        //                     const dateTime = moment(session.date).format('LT');
        //                     return (
        //                         dateDay >= nowDay && dateDay === day.split(',')[0] &&
        //                         <SessionTimes time={dateTime} key={index} session={session}/>
        //                     )
        //                 })
        //             }
        //         </span>
        //     </li>
        // });

        return (
            <div className='block-session'>
                <span className='block-session__timetable'> Расписание сеансов </span>
                {this.renderDayList()}
            </div>
        );
    }
}
Sessions = connect ( () =>({}), actionHall )( Sessions )
export default Sessions;
