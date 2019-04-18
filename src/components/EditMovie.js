import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import moment from 'moment'

import EditMovieItem from './EditMovieItem'
class AddMovie extends Component {
	state = {
		flag: false,
		movieName: '',
		movieItem: null,
		moviePoster: null,
	}

	renderSelectMovie = () => {
		const { adminGetMovieProps } = this.props

		const movies =
			adminGetMovieProps &&
			adminGetMovieProps.map(movie => {
				return (
					<li
						key={movie._id}
						id={movie._id}
						className="nav-block__item"
					>
						<Link
							to={`/admin-panel/edit-movie/${movie._id}`}
							className="nav-block__link"
							onClick={this.choiseMovie}
						>
							{movie.title}
						</Link>
					</li>
				)
			})
		return movies
	}

	choiseMovie = event => {
		const { adminGetMovieProps, clearPosterFunc } = this.props

		const movieItem = adminGetMovieProps.map(movie => {
			if (movie._id === event.target.parentNode.id) {
				this.setState({ movieItem: movie, moviePoster: movie.poster })
			}
		})

		this.setState({
			movieName: event.target.innerText,
			flag: false,
		})

		clearPosterFunc()
	}

	openNav = event => {
		console.log(this.state.flag)
		console.log(event.target)
		this.setState(prevState => {
			return { flag: !prevState.flag }
		})
	}

	getInitialValues = () => {
		const { movieItem } = this.state
		return {
			poster: movieItem && movieItem.poster,
			title: movieItem && movieItem.title,
			trailer: movieItem && movieItem.trailer,
			age: movieItem && movieItem.age,
			rentStart:
				movieItem &&
				`${moment(movieItem.rentStart).format('DD.MM.YYYY')} - ${moment(
					movieItem.rentEnd
				).format('DD.MM.YYYY')}`,
			language: movieItem && movieItem.language,
			long: movieItem && movieItem.long,
			genre: movieItem && movieItem.genre.join(','),
			country: movieItem && movieItem.country.join(','),
			actors: movieItem && movieItem.actors.join(','),
			description: movieItem && movieItem.description,
		}
	}

	valueEditMovie = values => {
		console.log(values)
		values.poster = this.props.posterLink || this.state.moviePoster
        values.country = values.country.split(',')
		values.genre = values.genre.split(',')
		values.actors = values.actors.lenght ? '' : values.actors.split(',')
		values.rentEnd = moment(
			values.rentStart.split('-')[1].trim(),
			'DD.MM.YYYY'
		).toJSON()
		values.rentStart = moment(
			values.rentStart.split('-')[0].trim(),
			'DD.MM.YYYY'
		).toJSON()
		console.log(values)

		const id = this.state.movieItem._id

		this.props.valuePutMovie(values, id)
	}

	render() {
		const { flag, movieName, moviePoster } = this.state
		const { handleSubmit } = this.props
		console.log('state movie item', this.state.movieItem)

		console.log('props edi movie', this.props)

		return (
			<div className="edit-movie-block">
				<h2 className="edit-movie-block__title">Редактировать фильм</h2>
				<form
					className="edit-movie-block__form"
					onSubmit={handleSubmit(this.valueEditMovie)}
				>
					<div className="edit-movie-block__btn">
						<div className="nav-block">
							<p className="nav-block__title">Выберите фильм</p>
							<button
								type="button"
								className="nav-block__btn"
								onClick={this.openNav}
							>
								{movieName}
							</button>
							{flag ? (
								<ul className="nav-block__list">
									{this.renderSelectMovie()}
								</ul>
							) : null}
						</div>
						<button>Отправить</button>
					</div>
					<div className="edit-movie-block__content content-list">
						<Switch>
							<Route
								path="/admin-panel/edit-movie/:id"
								render={() => (
									<EditMovieItem
										posterLinkStore={this.props.posterLink}
										adminOnLoadPosterFunc={
											this.props.adminOnLoadPosterFunc
										}
										initialValues={this.getInitialValues()}
										posterLink={moviePoster}
									/>
								)}
							/>
						</Switch>
					</div>
				</form>
			</div>
		)
	}
}

export default reduxForm({ form: 'editMovieItem' })(AddMovie)
