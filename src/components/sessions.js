import React, { Component } from 'react';

import { nowDay } from "../utils/nowDate";
import { dynamicSort } from "../utils/dynamicSort";

import SessionTimes from './sessionTimes';
import moment from 'moment';

class Sessions extends Component {
    render() {
<<<<<<< HEAD
        console.log("hello")
=======
>>>>>>> 57447ff544ce2c9c2dbb81748b5da2940cdb6317
        const { session } = this.props;
        const resDays = [];

        session && session.map( session => {
            const dateDay = moment(session.date).format('dddd' );
            if ( resDays.indexOf( dateDay ) === -1) resDays.push(dateDay);
            return resDays
        });
        // console.log('resDays', resDays);
<<<<<<< HEAD

        const dayList = resDays.map(( day, index ) => {
            return <li className="block-session__li" key={ index }>
                <span className="block-session__day"> { day } </span>
                <span className="block-session__times">
                             {
                                 session.sort(dynamicSort("date")).map( (session, index) => {

                                     const dateDay = moment(session.date).format('dddd' );
                                     const dateTime = moment(session.date).format('LT' );
                                     return (
                                         dateDay >= nowDay && dateDay === day && <SessionTimes time={ dateTime } key={index} session = {session} />
                                     )
                                 })
                             }
                         </span>
            </li>
=======
        const dayList = resDays.map(( day, index ) => {
            return (
                <li className="block-session__li" key={ index }>
                    <span className="block-session__day"> { day } </span>
                    <span className="block-session__times">
                        {
                            session.sort(dynamicSort("date")).map( (session, index) => {
                                const dateDay = moment(session.date).format('dddd' );
                                const dateTime = moment(session.date).format('LT' );
                                return dateDay >= nowDay && dateDay === day && <SessionTimes time={ dateTime } key={index}/>
                            })
                        }
                    </span>
                </li>
            )
>>>>>>> 57447ff544ce2c9c2dbb81748b5da2940cdb6317
        });
        return (
            <div className='block-session'>
                { dayList }
            </div>
        );
    }
}

<<<<<<< HEAD
export default Sessions;
=======
export default Sessions;
>>>>>>> 57447ff544ce2c9c2dbb81748b5da2940cdb6317
