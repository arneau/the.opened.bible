import React from 'react';

import ListItem from './list_item.jsx';

export default class List extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let { items } = this.props.data;
		return (
			<ul>
				{
					items.map(item => {
						return (
							<ListItem key={item.id} data={item} />
						)
					})
				}
			</ul>
		);
	}

}