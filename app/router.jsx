import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Wrapper from './containers/wrapper.jsx';

import HomePage from './pages/home.jsx';
import MissingPage from './pages/missing.jsx';
import OverviewPage from './pages/overview.jsx';
import TopicsPage from './pages/topics.jsx';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={Wrapper}>
			<IndexRoute component={HomePage} />
			<Route path="lesson/:id" component={HomePage} />
			<Route path="topic/:id" component={HomePage} />
			<Route path="overview" component={OverviewPage} />
			<Route path="topics" component={TopicsPage} />
			<Route path="*" component={MissingPage} />
		</Route>
	</Router>
);