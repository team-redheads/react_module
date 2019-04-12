import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../_img/logo.svg'
import logoM from '../_img/logo-menu.svg'
import ava from '../_img/ava.svg'
import logout from '../_img/logout.svg'
import { bindActionCreators } from "redux";
import { getLogOutAuthRequest } from "../actions/actionAuth";
import { connect } from "react-redux";

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
	};

	handleLogout (event) {
		// console.log('handleLogout this.props', this.props);
		const { getLogOutAuthRequest } = this.props;
		getLogOutAuthRequest();
	}


	render() {
		console.log(" render this.props ---- ", this.props);
		const token_lS = localStorage.getItem("token");

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
										to="/soon"
									>
										Скоро в прокате
									</Link>
								</li>
								{/*<li className="content-block__item">*/}
									{/*<Link*/}
										{/*className="content-block__link"*/}
										{/*to="/"*/}
									{/*>*/}
										{/*О компании*/}
									{/*</Link>*/}
								{/*</li>*/}
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
					{
						!token_lS ?
							<Link className="log-in-block__link" to="/auth">
								<img src={ava}  alt=""/>
							</Link> :
							<Link className="log-in-block__link" to="/" >
								<img src={logout} alt="" onClick={ this.handleLogout.bind(this) } className='logout' />
							</Link>
					}
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

const mapDispatchToProps = dispatch => bindActionCreators({ getLogOutAuthRequest  }, dispatch);
const mapStateToProps = state => ({
	token: state.auth.token
});
Header = connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);

export default Header
