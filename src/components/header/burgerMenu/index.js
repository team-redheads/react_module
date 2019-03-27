import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './burgerMenu.css'
import menuLogo from '../img/menu_logo.svg'

class BurgerMenu extends Component {
    state = {
        open: false,
    };

    open = () => {
        this.setState(prevState => {
            return {
                open: !prevState.open,
            }
        })
    };

    render() {
        const { open } = this.state;
        return (
            <React.Fragment>
                <div className="burger-menu">
                    <button
                        className={
                            open
                                ? 'header-btn-burger header-btn-burger_active'
                                : 'header-btn-burger'
                        }
                        onClick={this.open}
                    >
                        <span />
                    </button>
                    <div className="menu-block" style={open ? {display: 'block'} : {display: 'none'}}>
                        <div className="menu-logo">
                            <img
                                className="menu-logo-img"
                                src={menuLogo}
                                alt=""
                            />
                        </div>
                        <div className="menu-nav" >
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <Link className="nav-item-link" to="/">
                                        Сейчас в кино
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-item-link" to="/">
                                        Скоро в прокате
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-item-link" to="/">
                                        О компании
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-item-link" to="/">
                                        Личный кабинет
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg" style={open ? {display: 'block'} : {display: 'none'}}></div>
            </React.Fragment>
        )
    }
}

export default BurgerMenu
