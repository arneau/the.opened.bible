import React from 'react';

import Header from './structure/header.jsx';
import Main from './structure/main.jsx';
import Footer from './structure/footer.jsx';

import styles from './wrapper.scss';

export default class Wrapper extends React.Component {

	render() {
		return (
			<div className={styles.wrapper}>
				<Header />
				<Main>
					<div className="sheet"></div>
				</Main>
				<Footer />
			</div>
		);
	}

}