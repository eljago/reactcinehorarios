'use strict';

import React, { PropTypes } from 'react-native'

import ComponentMenu from './componentMenu'
import { routes } from '../Data'

export default class ContainerMenu extends React.Component {

  static propTypes = {
    onPress: PropTypes.func
  };

  constructor(props) {
    super(props);
    let dataRows = [];
    const keys = Object.keys(routes);
    for (let index = 0; index < keys.length; index++) {
      dataRows.push(routes[keys[index]]);
    }
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