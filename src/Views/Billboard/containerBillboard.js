'use strict';

import React, { PropTypes } from 'react-native';

import ComponentBillboard from './componentBillboard';

export default class ContainerBillboard extends React.Component {

  render() {
    return (
      <ComponentBillboard
        onPress={this._onPress.bind(this)}
        onFetch={this._onFetch.bind(this)}
      />
    );
  }

  _onPress(rowData) {

  }
}
