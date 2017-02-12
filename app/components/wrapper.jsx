import React from 'react';

import Header from './global/header.jsx';
import Footer from './global/footer.jsx';

import styles from './wrapper.scss';

export default class Wrapper extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}

}