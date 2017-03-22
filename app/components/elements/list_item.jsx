import React from 'react'
import { Link } from 'react-router'

import { loadDatasByIds } from '../../actions.js'

import styles from './list_item.scss'

export default class ListItem extends React.Component {

  static contextTypes = {
    dispatch: React.PropTypes.func,
    state: React.PropTypes.object
  }

  constructor (props) {
    super(props)
  }

  showChildren (id) {
    let dispatch = this.context.dispatch
    dispatch(loadDatasByIds(this.context.state.groups.tree[id]))
  }

  render () {

    let id = this.props.id

    if (this.context.state.groups.datas[id] === undefined) {
      return null
    }

    let { title, type } = this.context.state.groups.datas[id]
    let to = '/' + type + '/' + id

    let children = []
    if (this.context.state.groups.tree[id] !== undefined) {
      children = this.context.state.groups.tree[id]
    }

    return (
      <li className={styles.list_item}>
        <Link activeClassName="active" data-type={type} onClick={() => this.showChildren(id)} to={to}>
          <h2>{title}</h2>
          <p>Tags: 3</p>
        </Link>
        {children && (
        <ul>
          {
            children.map((id) => {
              return (
                <ListItem key={id} id={id} />
              )
            })
          }
        </ul>
        )}
      </li>
    )

  }

}