import React from 'react'

import ListItem from './list_item.jsx'

import styles from './list.scss'

export default class List extends React.Component {

	static contextTypes = {
		topics: React.PropTypes.object
	};

	constructor(props) {
		super(props)
	}

	render() {

		let { ids } = this.context.topics

		return (
			<ul className={styles.list}>
				{
					ids.map((id) => {
						return (
							<ListItem key={id} id={id} />
						)
					})
				}
			</ul>
		)

	}

}