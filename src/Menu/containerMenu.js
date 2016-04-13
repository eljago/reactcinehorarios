'use strict';

import React, { PropTypes } from 'react-native'

import ComponentMenu from './componentMenu'
import {getBaseRoutes} from '../routes/navigatorRoutes'

export default class ContainerMenu extends React.Component {

  static propTypes = {
    onPress: PropTypes.func
  };

  constructor(props) {
    super(props);

    const dataRows = getBaseRoutes();
    this.state = {
      dataRows: dataRows
    }
  }

  render() {
    return(
      <ComponentMenu
        onPress={this._onPress.bind(this)}
        dataRows={this.state.dataRows}
      />
    );
  }

  _onPress(routeData) {
    this.props.onPress(routeData);
  }
}