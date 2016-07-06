'use strict'

import React, { PropTypes } from 'react'
import Relay from 'react-relay'

import ComponentFunctions from './ComponentFunctions'
import {getShowRoute} from '../../routes/MyRoutes'
import {DateHelper} from '../../Utils'

export default class ContainerFunctions extends React.Component {

  static propTypes = {
    date: PropTypes.object,
    dataRows: PropTypes.object
  }

  render() {
    return (
      <ComponentFunctions 
        onPress={this._onPress.bind(this)}
        dataRows={this.props.dataRows}
      />
    )
  }

  _onPress(rowData) {
    const showRoute = getShowRoute(rowData.get('show_id'))
    this.props.navigator.superNavigator.push(showRoute)
  }
}

