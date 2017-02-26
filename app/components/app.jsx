import React from 'react'

import { fetchGroupIfNeeded } from '../actions.js'

import HeaderPart from './parts/header.jsx'
import FooterPart from './parts/footer.jsx'
import { DevTools } from '../dev_tools.js'

import styles from './app.scss'

export default class App extends React.Component {

  static childContextTypes = {
    dispatch: React.PropTypes.func,
    state: React.PropTypes.object
  }

  constructor(props) {
    super(props)
  }

  getChildContext() {
    return {
      dispatch: this.props.dispatch,
      state: this.props.state
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <HeaderPart />
        {this.props.children}
        <FooterPart />
        <DevTools />
      </div>
    )
  }

}