import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from './img/logo.svg'
import './header.css'
import BurgerMenu from './burgerMenu/index'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="header__nav">
                    <Link className="header__logo" to="/">
                        <img
                            className="header__logo-img"
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                    <BurgerMenu />
                    <h1 className="header__title"> multiplex </h1>
                </nav>
                <Link className="header__sing-in" to="/login">
                    <img src="https://multiplex.ua/img/ava_temp.svg" alt="sing in"/>
                </Link>
            </div>
        )
    }
}

export default Header
