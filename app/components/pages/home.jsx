import React from 'react'

import Sheets from '../elements/sheets.jsx'
import Sheet from '../elements/sheet.jsx'
import List from '../elements/list.jsx'

export default class HomePage extends React.Component {

  render () {
    let { params } = this.props

    return (
      <div>
        <Sheets>
          <Sheet>
            <List />
          </Sheet>
          {params.id && (
          <Sheet>
            <p>{params.id}</p>
          </Sheet>
          )}
        </Sheets>
      </div>
    )
  }

}
