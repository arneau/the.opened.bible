import React from 'react'
import { Link } from 'react-router'

import styles from './list_item.scss'

export default class ListItem extends React.Component {

	static contextTypes = {
		topics: React.PropTypes.object
	};

	constructor(props) {
		super(props)
	}

	render() {

		let { id, children, title, type } = this.context.topics.datas[this.props.id]
		let to = '/' + type + '/' + id

		return (
			<li className={styles.list_item}>
				<Link activeClassName="active" data-type={type} to={to}>
					<h2>{title}</h2>
					<p>Tags: 3</p>
				</Link>
				{children && (
				<ul>
					{
						children.map((item) => {
							return (
								<ListItem key={item.id} />
							)
						})
					}
				</ul>
				)}
			</li>
		)

	}

}