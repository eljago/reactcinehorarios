'use strict';

import React, { PropTypes } from 'react-native';

import ComponentComingSoon from './componentComingSoon';
// import ShowTabs from './showtabs.container';

import { Api } from '../../Utils';

export default class ContainerComingSoon extends React.Component {
  static displayName = "ContainerComingSoon";

  render() {
    return (
      <ComponentComingSoon
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
    Api.getComingSoon().then(json => {
      this._handleResponse(json, callback);
    }).catch(error => {
    	callback();
    }).done();
  }

  _handleResponse(json, callback) {
    if (json.coming_soon && json.coming_soon.length > 0) {
      callback(json.coming_soon);
    }
    else {
    	callback();
    }
  }
}
