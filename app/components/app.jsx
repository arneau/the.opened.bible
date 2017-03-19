import React from 'react'

import { fetchGroupIfNeeded } from '../actions.js'

import AsidePart from './parts/aside.jsx'
import ContentPart from './parts/content.jsx'
import HeaderPart from './parts/header.jsx'
import MainPart from './parts/main.jsx'
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
        <AsidePart />
        <MainPart>
          <HeaderPart />
          <ContentPart>
            {this.props.children}
          </ContentPart>
          <FooterPart />
        </MainPart>
        <DevTools />
      </div>
    )
  }

}