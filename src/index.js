import React from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Router from './Router'

ReactDom.render(
	<Provider>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
