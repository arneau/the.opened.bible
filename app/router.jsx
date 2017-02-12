import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Wrapper from './components/wrapper.jsx';

import Home from './components/pages/home.jsx';
import Overview from './components/pages/overview.jsx';
import Topics from './components/pages/topics.jsx';
import Missing from './components/pages/missing.jsx';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={Wrapper}>
			<IndexRoute component={Home} />
			<Route path="overview" component={Overview} />
			<Route path="topics" component={Topics} />
			<Route path="*" component={Missing} />
		</Route>
	</Router>
);


{/*<Router history={browserHistory}>*/}
	{/*<Route path="/" component={Wrapper}>*/}
		{/*<IndexRoute component={Main} />*/}
		{/*<Route path="*" component={Footer} />*/}
	{/*</Route>*/}
{/*</Router>*/}