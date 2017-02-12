import React from 'react';

import styles from './sheet.scss';

export default class SheetComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.sheet}>
				{this.props.children}
			</div>
		);
	}

}