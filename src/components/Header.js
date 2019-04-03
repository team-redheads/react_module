import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../_img/logo.svg'
import logoM from '../_img/logo-menu.svg'
import ava from '../_img/ava.svg'

class Header extends Component {
	state = {
		flag: false,
	}

	changeFlag = () => {
		this.setState(prevState => {
			return {
				flag: !prevState.flag,
			}
		})
	}

	render() {
		return (
			<div className="header-block">
				<div className="nav-block">
					<Link className="nav-block__logo" to="/">
						<img src={logo} alt="logo" />
					</Link>
					<div className="nav-block__menu menu-block">
						<button
							className={
								this.state.flag
									? 'menu-block__btn menu-block__btn_active'
									: 'menu-block__btn'
							}
							onClick={this.changeFlag}
						>
							<span />
						</button>
						<div
							className="menu-block_content content-block"
							style={
								this.state.flag
									? { display: 'block' }
									: { display: 'none' }
							}
						>
							<div className="content-block__logo">
								<img src={logoM} alt="" />
							</div>
							<ul className="content-block__list">
								<li className="content-block__item">
									<Link
										className="content-block__link"
										to="/"
									>
										Сейчас в кино
									</Link>
								</li>
								<li className="content-block__item">
									<Link
										className="content-block__link"
										to="/"
									>
										Скоро в прокате
									</Link>
								</li>
								<li className="content-block__item">
									<Link
										className="content-block__link"
										to="/"
									>
										О компании
									</Link>
								</li>
								<li className="content-block__item">
									<Link
										className="content-block__link"
										to="/auth"
									>
										Личный кабинет
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<h1 className="nav-block__title">{this.props.title}</h1>
				</div>
				<div className="log-in-block">
					<Link className="log-in-block__link" to="/auth">
						<img src={ava} alt="" />
					</Link>
				</div>
				<div
					onClick={this.changeFlag}
					className="bg"
					style={
						this.state.flag
							? { display: 'block' }
							: { display: 'none' }
					}
				/>
			</div>
		)
	}
}

export default Header
