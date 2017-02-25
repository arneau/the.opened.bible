import React from 'react';
import { Link } from 'react-router';

import * as fetchers from '../../fetchers.js';

import styles from './list_item.scss';

export default class ListItem extends React.Component {

	static contextTypes = {
		dispatch: React.PropTypes.func,
		state: React.PropTypes.object
	};

	constructor(props) {
		super(props);
	}

	loadChildren(topic_id) {
		fetchers.topics.fetchChildrenById(topic_id, this.context.state, this.context.dispatch);
	}

	render() {

		let { id, children, title, type } = this.context.state.topics.datas[this.props.id];
		let to = '/' + type + '/' + id;

		return (
			<li className={styles.list_item}>
				<Link activeClassName="active" data-type={type} onClick={() => this.loadChildren(id)} to={to}>
					<h2>{title}</h2>
					<p>Tags: 3</p>
				</Link>
				{children && (
				<ul>
					{
						children.map((item) => {
							return (
								<ListItem key={item.id} />
							);
						})
					}
				</ul>
				)}
			</li>
		);

	}

};