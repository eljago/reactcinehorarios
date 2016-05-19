'use strict';

import React, { PropTypes } from 'react';
import { Navigator } from 'react-native';

import ComponentCinemas from './componentCinemas';
import {getTheatersRoute} from '../../routes/navigatorRoutes';
import {cinemas} from '../../Data';

export default class ContainerCinemas extends React.Component {

  render() {
    return (
      <ComponentCinemas 
        onPress={this._onPress.bind(this)}
        dataRows={cinemas}
      />
    );
  }

  _onPress(dataRow) {
    const {name, cinema_id} = dataRow;
    let theatersRoute = getTheatersRoute(cinema_id, name);
    this.props.navigator.push(theatersRoute);
  }
}