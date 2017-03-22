import React from 'react'

import { loadDatasBySearchTerm } from '../../actions.js'

import GroupResult from '../elements/groups/result.jsx'

import styles from './search.scss'

export default class Search extends React.Component {

  static contextTypes = {
    dispatch: React.PropTypes.func,
    state: React.PropTypes.object
  }

  componentWillMount() {
    this.setState({
      timer: 0
    })
  }

  fetchResults = () => {
    clearTimeout(this.state.timer)
    let new_timer = setTimeout(() => {
      let dispatch = this.context.dispatch
      dispatch(loadDatasBySearchTerm(this.refs.search_input.value))
    }, 500)
    this.setState({
      timer: new_timer
    })
  }

  render () {
    let ids = []
    if (this.context.state.groups.results[0] !== undefined) {
      ids = this.context.state.groups.results
    }
    console.log(this.context.state.groups, ids)
    return (
      <div className={styles.search}>
        <div className={styles.input}>
          <input onKeyUp={this.fetchResults} placeholder="Search" ref="search_input" type="text" />
        </div>
        <div className={styles.results}>
          {
            ids.map((id) => {
              return (
                <GroupResult key={id} id={id} />
              )
            })
          }
        </div>
      </div>
    )
  }

}
