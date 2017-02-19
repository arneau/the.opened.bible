import React from 'react';

import Main from '../containers/main.jsx';

import Sheet from '../components/sheet.jsx';
import List from '../components/lists/list.jsx';

export default class HomePage extends React.Component {

	constructor(props) {
		super(props);
		// this.state = {
		// 	items: {
		// 		keys: [],
		// 		datas: []
		// 	}
		// };
	}

	componentWillMount() {
		fetch('http://localhost/api.opened.bible/').then((response) => {
			response.json().then((json) => {
				this.props.hydrateState(json);
			});
		});
	}

	render() {
		let { params } = this.props;
		return (
			<Main>
				<Sheet>
					<List data={this.props.topics} />
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