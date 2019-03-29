import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import AddMovie from './AddMovie'

class MainAdmin extends Component {
	render() {
		return (
			<div className="main-admin-block">
				<div className="main-admin-block__header">
					<nav className="main-admin-block__nav nav-main-admin">
						<ul className="nav-main-admin__list">
							<li className="nav-main-admin__item">
								<NavLink
									className="nav-main-admin__link"
									activeClassName="nav-main-admin__link_active"
									to="/admin/add-movie"
								>
									Добавить фильм
								</NavLink>
							</li>
							<li className="nav-main-admin__item">
								<NavLink
									className="nav-main-admin__link"
									activeClassName="nav-main-admin__link_active"
									to="/admin/add-movie-session"
								>
									Добавить фильму сеансы
								</NavLink>
							</li>
							<li className="nav-main-admin__item">
								<NavLink
									className="nav-main-admin__link"
									activeClassName="nav-main-admin__link_active"
									to="/admin/add-movies-hall"
								>
									Добавить фильму зал
								</NavLink>
							</li>
							<li className="nav-main-admin__item">
								<NavLink
									className="nav-main-admin__link"
									activeClassName="nav-main-admin__link_active"
									to="/admin/all-movies"
								>
									Все фильмы
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
				<div className="main-admin-block__content">
					<Switch>
						<Route
							exact
							path="/admin/add-movie"
							component={AddMovie}
						/>
                        <Route
							exact
							path="/admin/add-movie-session"
							component={AddMovie}
						/>
                        <Route
							exact
							path="/admin/add-movie-hall"
							component={AddMovie}
						/>
                        <Route
							exact
							path="/admin/oll-movies"
							component={AddMovie}
						/>
					</Switch>
				</div>
			</div>
		)
	}
}

export default MainAdmin
