import { Provider } from 'react-redux'
import store from './redux/store'
import { render } from 'react-dom'
import React from 'react'

render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
	Hello World	
	</h1>,
	document.getElementById('react-container')
)
