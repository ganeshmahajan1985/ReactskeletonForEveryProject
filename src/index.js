import { Provider } from 'react-redux'
import store from './redux/store'
import { render } from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'

render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,

	document.getElementById('react-container')
)
