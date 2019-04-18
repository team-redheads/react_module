import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { customInputAddMovie, customSelect } from './customField/customFields'

class AddMovieInfo extends Component {
	renderSelectMovie = () => {
		const { adminGetMovieProps } = this.props

		const movies =
			adminGetMovieProps &&
			adminGetMovieProps.map(movie => {
				return (
					<option key={movie._id} value={movie._id}>
						{movie.title}
					</option>
				)
			})
		return movies
	}

	renderSelectRoom = () => {
		const { adminGetRoomProps } = this.props

		const rooms =
			adminGetRoomProps &&
			adminGetRoomProps.map(room => {
				return (
					<option key={room._id} value={room._id}>
						{room.name}
					</option>
				)
			})
		return rooms
	}

	takeValue = values => {
		this.props.valueAddSession(values)
	}

	render() {
		const { handleSubmit } = this.props

		return (
			<div className="add-movie-info-block">
				<h2 className="add-movie-info-block__title">
					Добавить фильму доп. информации
				</h2>
				<form
					className="add-movie-info-block__form"
					onSubmit={handleSubmit(this.takeValue)}
				>
					<div className="add-movie-info-block__btn">
						<button>Отправить</button>
					</div>
					<div className="add-movie-info-block__content content-list">
						<div className="content-list__block">
							<Field
								name="movie"
								component={customSelect}
								label="Фильм"
							>
								{this.renderSelectMovie()}
							</Field>

							<Field
								name="room"
								component={customSelect}
								label="Зал"
							>
								{this.renderSelectRoom()}
							</Field>

							<Field
								name="date"
								component={customInputAddMovie}
								type="datetime-local"
								label="Дата и время"
								placeholder="18.04.2019"
							/>

							<Field
								name="costs"
								component={customInputAddMovie}
								type="text"
								label="Цена"
								placeholder="150"
							/>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default reduxForm({ form: 'addMovieInfo' })(AddMovieInfo)
