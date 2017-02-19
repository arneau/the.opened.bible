import React from 'react';

import ListItem from './list_item.jsx';

import styles from './list.scss';

export default class List extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let { keys } = this.props.data;
		window.datas = this.props.data.datas;
		return (
			<ul className={styles.list}>
				{
					keys.map((key) => {
						return (
							<ListItem key={key} data={datas[key]} />
						)
					})
				}
			</ul>
		);
	}

}