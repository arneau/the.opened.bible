import React from 'react';

import Main from '../containers/main.jsx';

import Sheet from '../components/sheet.jsx';
import List from '../components/lists/list.jsx';

import list_items from '../data/items.js';

export default class HomePage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let { params } = this.props;
		let list_data = {
			'items': list_items
		};
		return (
			<Main>
				<Sheet>
					<List data={list_data} />
				</Sheet>
				{params.id && (
					<Sheet>
						<p>{params.id}</p>
					</Sheet>
				)}
			</Main>
		);
	}

}