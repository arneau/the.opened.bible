import React from 'react'

import styles from './main.scss'

export default class MainPart extends React.Component {

  render () {
    return (
      <main className={styles.main}>
        {this.props.children}
      </main>
    )
  }

}
