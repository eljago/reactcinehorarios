'use strict'

import React, { PropTypes } from 'react'
import { Navigator } from 'react-native'

import Immutable from 'immutable'

import ComponentCinemas from './componentCinemas'
import {getTheatersRoute} from '../../routes/MyRoutes'
import {cinemas} from '../../Data'

export default class ContainerCinemas extends React.Component {

  state = {
    dataRows: Immutable.fromJS(cinemas)
  }

  render() {
    return (
      <ComponentCinemas 
        onPress={this._onPress.bind(this)}
        dataRows={this.state.dataRows}
      />
    )
  }

  _onPress(rowData) {
    const cinema_id = rowData.get('cinema_id')
    const name = rowData.get('name')
    const theaterRoute = getTheatersRoute(name, cinema_id);
    this.props.navigator.push(theaterRoute)
  }
}