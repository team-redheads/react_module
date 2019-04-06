import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'
import store from './store'
import Router from './Router'
store.subscribe(()=>console.log(store.getState(),"store"))

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
