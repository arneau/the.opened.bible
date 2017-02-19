import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Store from './store.js';

import Wrapper from './containers/wrapper.jsx';

import HomeContainer from './containers/home_container.js';

import HomePage from './pages/home.jsx';
import MissingPage from './pages/missing.jsx';
import OverviewPage from './pages/overview.jsx';
import TopicsPage from './pages/topics.jsx';

export default (
	<Provider store={Store}>
		<Router history={browserHistory}>
			<Route path="/" component={Wrapper}>
				<IndexRoute component={HomeContainer} />
				<Route path="lesson/:id" component={HomeContainer} />
				<Route path="topic/:id" component={HomeContainer} />
				<Route path="overview" component={OverviewPage} />
				<Route path="topics" component={TopicsPage} />
				<Route path="*" component={MissingPage} />
			</Route>
		</Router>
	</Provider>
);