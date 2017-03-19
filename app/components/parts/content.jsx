import React from 'react'

import styles from './content.scss'

export default class ContentPart extends React.Component {

  render () {
    return (
      <article className={styles.content}>
        {this.props.children}
      </article>
    )
  }

}
