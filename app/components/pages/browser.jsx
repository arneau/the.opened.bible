import React from 'react'

import MainPart from '../parts/main.jsx'
import Sheet from '../elements/sheet.jsx'
import List from '../elements/list.jsx'

export default class HomePage extends React.Component {

  render () {
    let { params } = this.props

    return (
      <MainPart>
        <Sheet>
          <List />
        </Sheet>
        {params.id && (
        <Sheet>
          <p>{params.id}</p>
        </Sheet>
        )}
      </MainPart>
    )
  }

}
