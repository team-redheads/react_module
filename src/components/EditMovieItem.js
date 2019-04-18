import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { required, onlyNumber, onlyWords } from '../_utils/validate'
import {
	customInputAddMovie,
	customTextAreaAddMovie,
} from './customField/customFields'

class EditMovieItem extends Component {
	onLoadPoster = event => {
		const formData = new FormData()
		formData.append('file', event.target.files[0])
		this.props.adminOnLoadPosterFunc(formData)
	}

	render() {
		const { posterLink, posterLinkStore } = this.props
		console.log(this.props.posterLinkStore)
		return (
			<div className="add-movie-block__content">
				<div className="form-block">
					<div className="form-block__file">
						<div>
							<p>Нажмите сюда, для загрузки изображения</p>
							<input
								name="poster"
								type="file"
								onChange={this.onLoadPoster}
							/>
							{posterLinkStore || posterLink ? (
								<div className="poster">
									<img
										src={posterLinkStore || posterLink}
										alt=""
									/>
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
							validate={[required]}
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
						validate={[required]}
					/>

					<Field
						name="rentStart"
						component={customInputAddMovie}
						type="text"
						label="Период проката"
						placeholder="11.04.2019 - 08.05.2019"
						validate={[required]}
					/>

					<Field
						name="language"
						component={customInputAddMovie}
						type="text"
						label="Язык"
						placeholder="Украинский язык"
						validate={[required]}
					/>

					<Field
						name="long"
						component={customInputAddMovie}
						type="text"
						label="Длительность"
						placeholder="2.01"
						validate={[required]}
					/>
				</div>
				<div className="form-block">
					<Field
						name="genre"
						component={customInputAddMovie}
						type="text"
						label="Жанр"
						placeholder="Боевик, Фантастика, Приключения, Фэнтези"
						validate={[required]}
					/>

					<Field
						name="country"
						component={customInputAddMovie}
						type="text"
						label="Производство"
						placeholder="США"
						validate={[required]}
					/>

					<Field
						name="actors"
						component={customInputAddMovie}
						type="text"
						label="В главных ролях"
						placeholder="Дэвид Харбор, Иэн Макшейн, Мила Йовович, Томас Хейден Чёрч, Саша Лeйн"
						validate={[onlyWords]}
					/>

					<Field
						name="description"
						component={customTextAreaAddMovie}
						type="text"
						label="Описание фильма"
						placeholder="Фильм основан на популярной серии комиксов..."
						validate={[ required]}
					/>
				</div>
			</div>
		)
	}
}

export default reduxForm({ form: 'editMovieItem', enableReinitialize: true })(
	EditMovieItem
)
