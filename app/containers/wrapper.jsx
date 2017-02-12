import React from 'react';

import FooterContainer from '../containers/footer.jsx';
import HeaderContainer from '../containers/header.jsx';

import styles from './wrapper.scss';

export default class Wrapper extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<HeaderContainer />
				{this.props.children}
				<FooterContainer />
			</div>
		);
	}

}