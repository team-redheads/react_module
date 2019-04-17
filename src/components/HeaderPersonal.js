import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import profile from '../_img/profile.svg'
import ticket from '../_img/ticket.svg'

class HeaderPersonal extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="personal-block__header">
                <div className="personal-block__user-name">
                    Добро пожаловать {user && user.local.firstName}.
                </div>
                <nav className="personal-block__nav nav-personal">
                    {
                        user && <ul className="nav-personal__list">
                            <li className="nav-personal__item">
                                <Link
                                    className="nav-personal__link"
                                    to={`/personal/${user._id}`}
                                >
                                    <img src={profile} className='nav-personal__icon' alt=""/>
                                    Профайл
                                </Link>
                            </li>
                            <li className="nav-personal__item">
                                <Link
                                    className="nav-personal__link"
                                    to={`/personal/${user._id}/tickets`}
                                >
                                    <img src={ticket} className='nav-personal__icon' alt=""/>
                                    Билеты
                                </Link>
                            </li>
                        </ul>
                    }
                </nav>
            </div>
        )
    }
}
export default HeaderPersonal