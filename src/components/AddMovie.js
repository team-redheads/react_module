import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { customInput, customTextarea } from './customField/customField'
import { inputValid } from '../_utils/validate'

class AddMovie extends Component {
	addInputs = () => {
		const name = [
			'title',
			'age',
			'producer',
			'rentalPeriod',
			'language',
			'genre',
			'long',
			'country',
			'scenario',
			'actors',
		]
		const label = [
			'Название фильма',
			'Возраст',
			'Режисер',
			'Период проката',
			'Язык',
			'Жанр',
			'Длительность',
			'Производство',
			'Сценарий',
			'В главных ролях',
		]
		const placeholder = [
			'Давай, танцуй!',
			'12+',
			'Александр Березань',
			'21.03.2019 - 10.04.2019',
			'Украинский язык',
			'Комедия, Экшн',
			'1:40',
			'Украина',
			'Александр Березань, Сергей Розводовский',
			'Денис Реконвальд, Валентина Войтенко, Дмитрий Фрид, Александр Мельник, Александра Хаснудинова, Татьяна Кобзар, Роман Чухманенко, Максим Дзюняк',
		]
		const input = name.map((value, index) => {
			return (
				<Field
					key={index}
					name={value}
					label={label[index]}
					component={customInput}
					type="text"
					placeholder={`Пример: ${placeholder[index]}`}
					validate={[inputValid]}
				/>
			)
		})
		return input
	}

	submit = values => {
		console.log('-----values', values)
	}
	render() {
		const { handleSubmit, pristine, submitting } = this.props
		return (
			<form className="add-movie-block" onSubmit={handleSubmit(this.submit)}>
				<h2 className="add-movie-block__title">Добавить фильм</h2>
				<div className="add-movie-block__content movie-content">
					<div className="movie-content__img-trailer">
						<div className="img-add">
							<p className="img-add__text">
								Нажмите сюда, для загрузки изображения
							</p>
							<input
								name="poster"
								className="img-add__input-file"
								type="file"
							/>
						</div>
						<div className="movie-content__trailer-add">
							<Field
								name="trailer"
								label="Ссылка"
								component={customInput}
                                placeholder="Ссылка на трейлер фильма"
                                validate={[inputValid]}
							/>
						</div>
					</div>
					<div className="movie-content__inputs">
						{this.addInputs()}
						<Field
							name="description"
							label="Описание фильма"
							component={customTextarea}
							placeholder="Талантливый молодой танцор Никита приезжает в Киев для участия в..."
							validate={[inputValid]}
						/>
					</div>
				</div>
				<button
					type="submit"
					className="add-movie__btn"
					disabled={pristine || submitting}
				>
					Добавить фильм
				</button>
			</form>
		)
	}
}

export default reduxForm({ form: 'addMovie' })(AddMovie)
