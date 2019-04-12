import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import profile from '../_img/profile.svg'
import ticket from '../_img/ticket.svg'

class HeaderPersonal extends Component {
    render() {
        const { user } = this.props;
        // console.log("user ------ ", user);
        return (
            <div className="personal-block__header">
                <div className="personal-block__user-name">
                    Добро пожаловать {user && user.local.firstName}.
                </div>
                <nav className="personal-block__nav nav-personal">
                    <ul className="nav-personal__list">
                        <li className="nav-personal__item">
                            <NavLink
                                className="nav-personal__link"
                                activeClassName="nav-personal__link_active"
                                // to="/personal/profile"
                                to={`/personal/${user && user._id}`}
                            >
                                <img src={profile} className='nav-personal__icon' alt=""/>
                                Профайл
                            </NavLink>
                        </li>
                        <li className="nav-personal__item">
                            <NavLink
                                className="nav-personal__link"
                                activeClassName="nav-personal__link_active"
                                to="/personal/tickets"
                                // to={`/personal/${ user && user._id}/tickets`}
                            >
                                <img src={ticket} className='nav-personal__icon' alt=""/>
                                Билеты
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default HeaderPersonal