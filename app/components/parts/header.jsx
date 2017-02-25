import React from 'react'
import { Link } from 'react-router'

import styles from './header.scss'

export default class HeaderPart extends React.Component {

  render () {
    return (
      <header className={styles.header}>
        <Link to='/'>Home</Link>
        <Link to='/overview'>Overview</Link>
        <Link to='/topics'>Topics</Link>
        <Link to='/lessons'>Lessons</Link>
      </header>
    )
  }

}
