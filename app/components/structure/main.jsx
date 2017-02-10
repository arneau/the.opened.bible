import React from 'react';

import styles from './main.scss';

export default class Main extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main className={styles.main}>
				{this.props.children}
			</main>
		);
	}

}