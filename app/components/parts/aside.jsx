import React from 'react'
import { Link } from 'react-router'

import styles from './aside.scss'

export default class AsidePart extends React.Component {

  static contextTypes = {
    state: React.PropTypes.object
  }

  render () {
    let style = {}
    if (this.context.state.aside.isVisible) {
      style = {
        flexBasis: '200px'
      }
    }
    return (
      <aside className={styles.aside} style={style}>
        <h1>
          <i className="material-icons">swap_vertical_circle</i>
          <span>the.opened.bible</span>
        </h1>
        <hr />
        <nav className={styles.links}>
          <Link strict activeClassName={styles.active} to='/'>
            <i className="material-icons">home</i>
            <span>Home</span>
          </Link>
          <Link activeClassName={styles.active} to='/search'>
            <i className="material-icons">search</i>
            <span>Search</span>
          </Link>
          <hr />
          <Link activeClassName={styles.active} to='/overview'>
            <i className="material-icons">book</i>
            <span>Overview</span>
          </Link>
          <Link activeClassName={styles.active} to='/topics'>
            <i className="material-icons">directions_boat</i>
            <span>Topics</span>
          </Link>
          <Link activeClassName={styles.active} to='/lessons'>
            <i className="material-icons">map</i>
            <span>Lessons</span>
          </Link>
        </nav>
      </aside>
    )
  }

}
