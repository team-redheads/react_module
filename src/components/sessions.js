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

    render() {

        const {session} = this.props;
        const resDays = [];

        session && session.sort(dynamicSort("date")).map(session => {
            const dateDay = session.date.split('T')[0];
            if (resDays.indexOf(dateDay) === -1) resDays.push(dateDay);
            return resDays
        });

        const dayList = resDays.map((day, index) => {
            return (
                moment(day).isAfter(nowDate) &&
                <li className="block-session__li" key={index}>
                    <span className="block-session__day"> { moment(day ).format('DD MMMM YYYY, dddd') } </span>
                    <span className="block-session__times">
                        {
                            session.sort(dynamicSort("date")).map((session, index) => {
                                const dateDay  = moment(session.date).format('YYYY MMMM DD, dddd - LT');
                                const now_Date = moment(nowDate).format('YYYY MMMM DD, dddd');
                                const d        = moment(day).format('YYYY MMMM DD, dddd');

                                return (
                                    dateDay.split(' - ')[0] >= now_Date &&
                                    dateDay.split(' - ')[0] === d &&
                                    <Link to='/hall'
                                          className="block-session__link"
                                          key={index}
                                          onClick = {this.clickHanler(session)}
                                    >
                                        <span className="block-session__times-item">
                                            {dateDay.split(' - ')[1]}
                                        </span>
                                    </Link>
                                )
                            })
                        }
                    </span>
                </li>
            );
        });

        return (
            <div className='block-session'>
                <span className='block-session__timetable'> Расписание сеансов </span>
                {dayList}
            </div>
        );
    }
}
Sessions = connect ( null   , actionHall )( Sessions );
export default Sessions;
