import React from 'react'

import { loadDatas, loadTree } from '../../actions.js'

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
    dispatch(loadTree())
    .then(() => {
      dispatch(loadDatas(this.context.state.groups.tree[0]))
    })
  }

  render () {
    let ids = []
    if (this.context.state.groups.tree[0] !== undefined) {
      ids = this.context.state.groups.tree[0]
    }
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