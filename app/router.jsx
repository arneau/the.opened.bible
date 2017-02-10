import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Wrapper from './components/wrapper.jsx';

export default (
	<Router history={browserHistory}>
		<Route path="*" component={Wrapper}>
		</Route>
	</Router>
);


{/*<Router history={browserHistory}>*/}
	{/*<Route path="/" component={Wrapper}>*/}
		{/*<IndexRoute component={Main} />*/}
		{/*<Route path="*" component={Footer} />*/}
	{/*</Route>*/}
{/*</Router>*/}