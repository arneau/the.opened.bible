import React from 'react'

import GroupResult from '../elements/groups/result.jsx'

import styles from './search.scss'

export default class Search extends React.Component {

  render () {
    return (
      <div className={styles.search}>
        <div className={styles.input}>
          <i className="material-icons">search</i>
          <input placeholder="Search" type="text" />
        </div>
        <div className={styles.results}>
          <GroupResult id="2" />
          <GroupResult id="235" />
          <GroupResult id="1836" />
        </div>
      </div>
    )
  }

}
