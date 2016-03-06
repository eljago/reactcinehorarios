'use strict';

import React, { PropTypes } from 'react-native';

import ComponentBillboard from './componentBillboard';
// import ShowTabs from './showtabs.container';

import { Api } from '../Utils';

export default class ContainerBillboard extends React.Component {
  static displayName = "ContainerBillboard";

  render() {
    return (
      <ComponentBillboard
        onPress={this._onPress.bind(this)}
        onFetch={this._onFetch.bind(this)}
      />
    );
  }

  _onPress(data) {
    // this.props.navigator.push({
    //   title: data.name,
    //   component: ShowTabs,
    //   extraData: {showData: data}
    // });
  }

  _onFetch(page = 1, callback, options) {
    Api.getBillboard().then(json => {
      this._handleResponse(json, callback);
    }).catch(error => {
    	callback();
    }).done();
  }

  _handleResponse(json, callback) {
    if (json.billboard && json.billboard.length > 0) {
      callback(json.billboard);
    }
    else {
    	callback();
    }
  }
}
