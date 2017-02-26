import React from 'react'

import { fetchGroupIfNeeded } from '../../actions.js'

import ListItem from './list_item.jsx'

import styles from './list.scss'

export default class List extends React.Component {

  static contextTypes = {
    dispatch: React.PropTypes.func,
    state: React.PropTypes.object
  }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    let dispatch = this.context.dispatch
    dispatch(fetchGroupIfNeeded(2))
  }

  render () {

    let ids = Object.keys(this.context.state.groups.tree)

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