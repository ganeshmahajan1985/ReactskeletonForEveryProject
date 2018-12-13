import { history } from '../_helper'
import { Router, Route } from 'react-router-dom'
import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'
import { PrivateRoute } from '../_components'
import React from 'react'

export const App = () =>
    <Router history={history} >
        <div>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
        </div>
    </Router >