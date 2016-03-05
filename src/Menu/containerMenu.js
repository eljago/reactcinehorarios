'use strict';

import React, { PropTypes } from 'react-native'

import ComponentMenu from './componentMenu'
import { routes } from '../Data'

export default class ContainerMenu extends React.Component {

  static propTypes = {
    onPress: PropTypes.func
  };
  static displayName = "ContainerMenu";

  render() {
    return(
      <ComponentMenu
        onPress={this._onPress.bind(this)}
        onFetch={this._onFetch}
      />
    );
  }

  _onPress(routeData) {
    this.props.onPress(routeData);
  }

  _onFetch(page = 1, callback, options) {
    callback(routes);
  }
}