import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Store from './store.js'

import App from './containers/app.js'

import HomePage from './components/pages/home.jsx'
import MissingPage from './components/pages/missing.jsx'
import OverviewPage from './components/pages/overview.jsx'
import SearchPage from './components/pages/search.jsx'
import TopicsPage from './components/pages/topics.jsx'

export default (
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={HomePage} />
        <Route path='lesson/:id' component={HomePage} />
        <Route path='topic/:id' component={HomePage} />
        <Route path='overview' component={OverviewPage} />
        <Route path='search' component={SearchPage} />
        <Route path='topics' component={TopicsPage} />
        <Route path='*' component={MissingPage} />
      </Route>
    </Router>
  </Provider>
)
