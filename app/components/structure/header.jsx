import React from 'react';

import styles from './header.scss';

class Header extends React.Component {

	render() {
		return (
			<div className={styles.header}>
				<a href="">Home</a>
				<a href="overview">Overview</a>
				<a href="topics">Topics</a>
				<a href="lessons">Lessons</a>
			</div>
		);
	}

}

export default Header;