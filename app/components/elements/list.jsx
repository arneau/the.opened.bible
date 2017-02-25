import React from 'react';

import * as fetchers from '../../fetchers.js';

import ListItem from './list_item.jsx';

import styles from './list.scss';

export default class List extends React.Component {

	static contextTypes = {
		dispatch: React.PropTypes.func,
		state: React.PropTypes.object
	};

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		fetchers.topics.fetchChildrenById(0, this.context.state, this.context.dispatch);
	}

	render() {

		let { ids } = this.context.state.topics;

		return (
			<ul className={styles.list}>
				{
					ids.map((id) => {
						return (
							<ListItem key={id} id={id} />
						);
					})
				}
			</ul>
		);

	}

}