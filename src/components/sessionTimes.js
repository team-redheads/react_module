import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SessionTimes extends Component{
    render() {
        const { time } = this.props;
        console.log('time',time);
        return (
            <Link to='' className="block-session__link">
                <span className="block-session__times-item">
                    {time}
                </span>
            </Link>
        );
    }
}
export default SessionTimes;