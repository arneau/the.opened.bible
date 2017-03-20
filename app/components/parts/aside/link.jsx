import React from 'react'
import { Link } from 'react-router'

import styles from './link.scss'

export default class AsideLinkComponent extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Link strict activeClassName={styles.active} className={styles.link} to={this.props.to}>
        <i className="material-icons">{this.props.icon}</i>
        <span>{this.props.label}</span>
      </Link>
    )
  }

}
