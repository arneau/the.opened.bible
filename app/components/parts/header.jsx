import React from 'react'
import { Link } from 'react-router'

import styles from './header.scss'

export default class HeaderPart extends React.Component {

  static contextTypes = {
    dispatch: React.PropTypes.func
  }

  toggleAside = () => {
    this.context.dispatch({
      type: 'TOGGLE_ASIDE'
    })
  }

  render () {
    return (
      <header className={styles.header}>
        <div className={styles.menu} onClick={this.toggleAside}>
          <i className="material-icons">reorder</i>
        </div>
        <div className={styles.title}>
          <h1>Home</h1>
        </div>
        <Link className={styles.back} to="/">
          <i className="material-icons">arrow_back</i>
        </Link>
      </header>
    )
  }

}
