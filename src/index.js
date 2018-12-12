import { Provider } from 'react-redux'
import store from './redux/store'
import { render } from 'react-dom'
import React from 'react'

render(
	<Provider store={store}>
		<button store={store}>
			Login
		</button>
	</Provider>,

	document.getElementById('react-container')
)
