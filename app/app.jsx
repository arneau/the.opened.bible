import React from 'react';
import {render} from 'react-dom';

import Header from './components/structure/header.jsx';

import styles from './app.scss';

class App extends React.Component {

	render() {
		return (
			<div className={styles.app}>
				<Header />
				<div id="page"></div>
			</div>
		);
	}

}

render(<App />, document.getElementById('wrapper'));