import React from 'react'

import styles from './search.scss'

export default class Search extends React.Component {

  render () {
    return (
      <div className={styles.search}>
        <div className={styles.input}>
          <input placeholder="Search" type="text" />
        </div>
        <div className={styles.results}></div>
      </div>
    )
  }

}
