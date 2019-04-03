import React, { Component } from 'react'

import Header from './Header'

import bg from '../_img/bg.jpg'

import Sessions from './sessions'
import Poster from './MoviePoster'
import Information from './information'

class DetailsMoviePage extends Component {
	render() {
		const { movie, session } = this.props
		// console.log('---- DetailsMoviePage session: ', session);
		return (
			<React.Fragment>
				<Header title={'Multiplex'} />
				<div className="block-info">
					<div className="block-info__bg-color">
						<Poster
							poster={movie.poster}
							trailer={movie.trailer}
							title={movie.title}
						/>
						<Information movie={movie} />
						<Sessions session={session} />
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default DetailsMoviePage
