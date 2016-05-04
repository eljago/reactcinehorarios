'use strict';

import React, { PropTypes } from 'react-native';
import Relay from 'react-relay';

import ComponentFunctions from './ComponentFunctions';
import {getShowRoute} from '../../routes/navigatorRoutes'
import {DateHelper} from '../../Utils'

require('../../Utils/ArrayExtension');

export default class ContainerFunctions extends React.Component {

  static propTypes = {
    date: PropTypes.object,
    dataRows: PropTypes.array
  };

  render() {
    return (
      <ComponentFunctions 
        onPress={this._onPress.bind(this)}
        dataRows={this.props.dataRows}
      />
    );
  }

  _onPress(rowData) {
    const {show_id} = rowData;
    let showRoute = getShowRoute(show_id);
    this.props.navigator.push(showRoute);
  }
}

