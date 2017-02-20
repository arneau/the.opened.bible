import React from 'react'

import Main from '../containers/main.jsx'
import Sheet from '../components/sheet.jsx'
import List from '../components/lists/list.jsx'

export default class HomePage extends React.Component {

	static childContextTypes = {
		topics: React.PropTypes.object
	}

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		fetch('http://localhost/api.opened.bible/').then((response) => {
			response.json().then((json) => {
				this.props.hydrateState(json)
			})
		})
	}

	getChildContext() {
		return {
			topics: this.props.topics
		}
	}

	render() {

		let { params } = this.props

		return (
			<Main>
				<Sheet>
					<List />
				</Sheet>
				{params.id && (
					<Sheet>
						<p>{params.id}</p>
					</Sheet>
				)}
			</Main>
		)

	}

}