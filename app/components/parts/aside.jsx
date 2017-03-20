import React from 'react'

import AsideLinkComponent from './aside/link.jsx'

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
          <AsideLinkComponent icon="home" label="Home" to="/" />
          <AsideLinkComponent icon="search" label="Search" to="/search" />
          <AsideLinkComponent icon="book" label="Overview" to="/overview" />
          <hr />
          <AsideLinkComponent icon="directions_boat" label="Topics" to="/topics" />
          <AsideLinkComponent icon="map" label="Lessons" to="/lessons" />
        </nav>
      </aside>
    )
  }

}
