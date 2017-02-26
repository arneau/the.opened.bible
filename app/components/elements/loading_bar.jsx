import React from 'react'

import styles from './loading_bar.scss'

export default class LoadingBar extends React.Component {

  render () {

    return (
      <div className={styles.loading_bar}>
        <div className={styles.progress}></div>
      </div>
    )

  }

}