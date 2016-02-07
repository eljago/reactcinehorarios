'use strict';

import React, { PropTypes } from 'react-native';

import Billboard from '../components/billboard/billboard';
import Show from '../Views/Show';

import api from '../Utils/api';

export default class BillboardContainer extends React.Component {
  
  static propTypes = {
    navigator: PropTypes.object
  };
  static displayName = "BillboardContainer";

  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <Billboard
        onPress={this._onPress.bind(this)}
        onFetch={this._onFetch.bind(this)}
      />
    );
  }

  _onPress(data) {
    this.props.navigator.push({
      title: data.name,
      component: Show,
      extraData: {showData: data}
    });
  }

  _onFetch(page = 1, callback, options) {
    api.getBillboard().then(json => {
      this._handleResponse(json, callback);
    }).catch(error => {
    	callback();
    });
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
