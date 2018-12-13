import { history } from '../_helper'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'
import { PrivateRoute } from '../_components'

export const App = () =>
    <BrowserRouter history={history} >
        <div>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
        </div>
    </BrowserRouter >