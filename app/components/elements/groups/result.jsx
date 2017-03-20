import React from 'react'
import { Link } from 'react-router'

import styles from './result.scss'

export default class GroupResult extends React.Component {

  static contextTypes = {
    state: React.PropTypes.object
  }

  constructor (props) {
    super(props)
  }

  render () {
    let id = this.props.id
    if (this.context.state.groups.datas[id] === undefined) {
      return null
    }
    let { title, type } = this.context.state.groups.datas[id]
    let to = '/' + type + '/' + id
    return (
      <Link className={styles.result} data-type={type} to={to}>
        <div className={styles.content}>
          <h6>God / Jesus / Attributes /</h6>
          <h2>{title}</h2>
          <p>Children: 4, Tags: 12</p>
        </div>
      </Link>
    )
  }

}
