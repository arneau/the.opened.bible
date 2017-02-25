import React from 'react'

import styles from './footer.scss'

export default class FooterPart extends React.Component {

  render () {
    return (
      <footer className={styles.footer}>
        <p>Copyright 2017</p>
      </footer>
    )
  }

}
