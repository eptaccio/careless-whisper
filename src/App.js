import React from 'react'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { AppHistory } from './store/middlewares/router'

import Home from './containers/home'
import Potato from './containers/potato'

const App = () => (
  <div>
    <ConnectedRouter history={AppHistory}>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/potato' component={Potato} />
      </div>
    </ConnectedRouter>
  </div>
)

export default App
