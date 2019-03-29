import React from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.scss'
import Router from './Router'
import store from './store/store'

ReactDom.render(
	<Provider store={store}>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
