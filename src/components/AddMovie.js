import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import moment from 'moment'

import {
	customInputAddMovie,
	customTextAreaAddMovie,
} from './customField/customFields'

class AddMovie extends Component {
	state = {
		flag: true,
	}

	onLoadPoster = event => {
		const formData = new FormData()
		formData.append('file', event.target.files[0])
		this.props.adminOnLoadPosterFunc(formData)
	}

	valueAddMovie = values => {
		values.genre = values.genre.split(',')
		values.country = values.country.split(',')
		values.actors = values.actors ? values.actors.split(',') : ''

		values.rentEnd = moment(
			values.rentStart.split('-')[1].trim(),
			'DD.MM.YYYY'
		).toJSON()
		values.rentStart = moment(
			values.rentStart.split('-')[0].trim(),
			'DD.MM.YYYY'
		).toJSON()

		this.props.valueAddMovie(values)
		this.props.reset()
	}

	render() {
		const { handleSubmit, posterLink } = this.props
		console.log(this.props)
		return (
			<div className="add-movie-block">
				<h2 className="add-movie-block__title"> Добавить фильм</h2>
				<form
					className="add-movie-block__form"
					onSubmit={handleSubmit(this.valueAddMovie)}
				>
					<div className="add-movie-block__btn">
						<button>Отправить</button>
					</div>
					<div className="add-movie-block__content">
						<div className="form-block">
							<div className="form-block__file">
								<div>
									<p>
										Нажмите сюда, для загрузки изображения
									</p>
									<input
										name="poster"
										type="file"
										onChange={this.onLoadPoster}
									/>
									{posterLink ? (
										<div className="poster">
											<img src={posterLink} alt="" />
										</div>
									) : null}
								</div>
							</div>

							<div className="right-input">
								<Field
									name="title"
									component={customInputAddMovie}
									type="text"
									label="Имя фильма"
									placeholder="Хеллбой"
								/>

								<Field
									name="trailer"
									component={customInputAddMovie}
									type="text"
									label="Ссылка на трейлер фильма"
									placeholder="https://www.youtube.com/embed/5ed9ukVdFWM"
								/>
							</div>
						</div>
						<div className="form-block">
							<Field
								name="age"
								component={customInputAddMovie}
								type="text"
								label="Возраст"
								placeholder="18"
							/>

							<Field
								name="rentStart"
								component={customInputAddMovie}
								type="text"
								label="Период проката"
								placeholder="11.04.2019 - 08.05.2019"
							/>

							<Field
								name="language"
								component={customInputAddMovie}
								type="text"
								label="Язык"
								placeholder="Украинский язык"
							/>

							<Field
								name="long"
								component={customInputAddMovie}
								type="text"
								label="Длительность"
								placeholder="2.01"
							/>
						</div>
						<div className="form-block">
							<Field
								name="genre"
								component={customInputAddMovie}
								type="text"
								label="Жанр"
								placeholder="Боевик, Фантастика, Приключения, Фэнтези"
							/>

							<Field
								name="country"
								component={customInputAddMovie}
								type="text"
								label="Производство"
								placeholder="США"
							/>

							<Field
								name="actors"
								component={customInputAddMovie}
								type="text"
								label="В главных ролях"
								placeholder="Дэвид Харбор, Иэн Макшейн, Мила Йовович, Томас Хейден Чёрч, Саша Лeйн"
							/>

							<Field
								name="description"
								component={customTextAreaAddMovie}
								type="text"
								label="Описание фильма"
								placeholder="Фильм основан на популярной серии комиксов..."
							/>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default reduxForm({
	form: 'addMovie',
})(AddMovie)
