import React from 'react'

import styles from './sheets.scss'

export default class SheetsComponent extends React.Component {

  render () {
    return (
      <div className={styles.sheets}>
        {this.props.children}
      </div>
    )
  }

}
