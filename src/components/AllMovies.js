import React, { Component } from 'react'
import moment from 'moment'

import trash from '../_img/trash.svg'
import pencil from '../_img/pencil.svg'
import {nowDate} from "../_utils/nowDate";

class AllMovies extends Component {
	state = {
		listMovie: null,
	}

	componentDidMount() {
		console.log(this.props.listMovieо)
		this.allMovie(this.props.listMovie)
	}

	rentOn = () => {
		const { listMovie } = this.props
		const rentOn = listMovie.filter(value => {
			const newDate = moment(nowDate).format('YYYY.MM.DD')
			const rentStart = moment(value.rentStart).format('YYYY.MM.DD')
			const rentEnd = moment(value.rentEnd).format('YYYY.MM.DD')

			return rentStart <= newDate && newDate <= rentEnd
		})
		console.log(rentOn)
		this.allMovie(rentOn)
	}

	rentSoon = () => {
		const { listMovie } = this.props
		const rentSoon = listMovie.filter(value => {
			const newDate = moment(nowDate).format('YYYY.MM.DD')
			const rentStart = moment(value.rentStart).format('YYYY.MM.DD')

			return newDate < rentStart
		})
		console.log(rentSoon)
		this.allMovie(rentSoon)
	}

	rentEnd = () => {
		const { listMovie } = this.props
		const rentSoon = listMovie.filter(value => {
			const newDate = moment(nowDate).format('YYYY.MM.DD')
			const rentEnd = moment(value.rentEnd).format('YYYY.MM.DD')

			return newDate > rentEnd
		})
		console.log(rentSoon)
		this.allMovie(rentSoon)
	}

	allMovie = val => {
		let itemMovie = val.map(value => {
			return (
				<ItemMovie
					key={value._id}
					poster={value.poster}
					title={value.title}
					rentStart={value.rentStart}
                    rentEnd={value.rentEnd}
                    
				/>
			)
		})
		return this.setState({ listMovie: itemMovie })
	}

	render() {
		const { listMovie } = this.props
		return (
			<div className="all-movie-block">
				<h2 className="all-movie-block__title">Все фильмы</h2>
				<div className="all-movie-block__center">
					<div className="all-movie-block__content">
						<ul className="list">{this.state.listMovie}</ul>
					</div>
					<div className="all-movie-block__filter filter">
						<ul className="filter__list">
							<h3 className="filter__title">Фильтр</h3>
							<li
								className="filter__item filter__item_active"
								onClick={() => this.allMovie(listMovie)}
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
			moment(nowDate).format('YYYY.MM.DD') <=
			moment(rentEnd).format('YYYY.MM.DD')
		) {
			this.setState({ rent: 'В прокате' })
		}

		if (
			moment(rentStart).format('YYYY.MM.DD') >=
			moment(nowDate).format('YYYY.MM.DD')
		) {
			this.setState({ rent: 'Скоро в прокате' })
		}

		if (
			moment(nowDate).format('YYYY.MM.DD') >
			moment(rentEnd).format('YYYY.MM.DD')
		) {
			this.setState({ rent: 'Прокат закончен', flag: true })
		}
	}

	render() {
		const { poster, title, rentStart, rentEnd } = this.props
		const { rent, flag } = this.state

		return (
			<li className="item">
				<div className="item__item-block">
					<span className="block1" >
						<img src={trash} alt="" title="удалить" />
					</span>
					<span className="block2">
						<img src={pencil} alt="" title="редактировать" />
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
