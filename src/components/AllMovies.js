import React, { Component } from 'react'
import moment from 'moment'

import trash from '../_img/trash.svg'
import pencil from '../_img/pencil.svg'

class AllMovies extends Component {
	state = {
		renderMovie: null,
	}

	componentDidMount() {
		const { adminGetMovieProps } = this.props
		this.allMovie(adminGetMovieProps)
	}

    newDate = moment().format('YYYY.MM.DD')

	rentOn = () => {
		const { adminGetMovieProps } = this.props
		const rentOn = adminGetMovieProps.filter(value => {
			const rentStart = moment(value.rentStart).format('YYYY.MM.DD')
			const rentEnd = moment(value.rentEnd).format('YYYY.MM.DD')

			return rentStart <= this.newDate && this.newDate <= rentEnd
		})
		console.log(rentOn)
		this.allMovie(rentOn)
	}

	rentSoon = () => {
		const { adminGetMovieProps } = this.props
		const rentSoon = adminGetMovieProps.filter(value => {
			const rentStart = moment(value.rentStart).format('YYYY.MM.DD')

			return this.newDate < rentStart
		})
		console.log(rentSoon)
		this.allMovie(rentSoon)
	}

	rentEnd = () => {
		const { adminGetMovieProps } = this.props
		const rentSoon = adminGetMovieProps.filter(value => {
			const rentEnd = moment(value.rentEnd).format('YYYY.MM.DD')

			return this.newDate > rentEnd
		})
		console.log(rentSoon)
		this.allMovie(rentSoon)
	}

	allMovie = val => {
		const { adminDellMovieFunc } = this.props

		let itemMovie = val.map(value => {
			return (
				<ItemMovie
					key={value._id}
					id={value._id}
					poster={value.poster}
					title={value.title}
					rentStart={value.rentStart}
					rentEnd={value.rentEnd}
					adminDellMovieFunc={adminDellMovieFunc}
				/>
			)
		})
		return this.setState({ renderMovie: itemMovie })
	}

	render() {
		const { adminGetMovieProps } = this.props
		const { renderMovie } = this.state

		return (
			<div className="all-movie-block">
				<h2 className="all-movie-block__title">Все фильмы</h2>
				<div className="all-movie-block__center">
					<div className="all-movie-block__content">
						<ul className="list">{renderMovie}</ul>
					</div>
					<div className="all-movie-block__filter filter">
						<ul className="filter__list">
							<h3 className="filter__title">Фильтр</h3>
							<li
								className="filter__item"
								onClick={() =>
									this.allMovie(adminGetMovieProps)
								}
							>
								Все фильмы
							</li>
							<li className="filter__item" onClick={this.rentOn}>
								В прокате
							</li>
							<li
								className="filter__item"
								onClick={this.rentSoon}
							>
								Скоро в прокате
							</li>
							<li className="filter__item" onClick={this.rentEnd}>
								Прокат закончен
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default AllMovies

class ItemMovie extends Component {
	state = {
		rent: null,
		flag: null,
	}

	componentDidMount() {
		const { rentStart, rentEnd } = this.props
		if (
			moment().format('YYYY.MM.DD') <=
			moment(rentEnd).format('YYYY.MM.DD')
		) {
			this.setState({ rent: 'В прокате' })
		}

		if (
			moment(rentStart).format('YYYY.MM.DD') >
			moment().format('YYYY.MM.DD')
		) {
			this.setState({ rent: 'Скоро в прокате' })
		}

		if (
			moment().format('YYYY.MM.DD') > moment(rentEnd).format('YYYY.MM.DD')
		) {
			this.setState({ rent: 'Прокат закончен', flag: true })
		}
	}

	takeMovieId = event => {
		const id = event.currentTarget.parentNode.parentNode.id
		this.props.adminDellMovieFunc(id)
	}

	render() {
		const { id, poster, title, rentStart, rentEnd } = this.props
		const { rent, flag } = this.state

		return (
			<li className="item" id={id}>
				<div className="item__item-block">
					<span className="block1" onClick={this.takeMovieId}>
						<img src={trash} alt="" title="удалить" />
					</span>
				</div>
				<div
					className={
						flag
							? 'item__img-block item__img-block_filter'
							: 'item__img-block'
					}
				>
					<img src={poster} alt="poster" />
					<span>{rent}</span>
				</div>
				<p className="item__movie-name">{title}</p>
				<p className="item__info">{`${moment(rentStart).format(
					'DD.MM.YYYY'
				)} - ${moment(rentEnd).format('DD.MM.YYYY')}`}</p>
			</li>
		)
	}
}
