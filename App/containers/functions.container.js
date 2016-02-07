'use strict';

import React, { PropTypes } from 'react-native';

import Functions from '../components/functions/functions';
import ShowView from '../Views/Show';

import api from '../Utils/api';

export default class FunctionsContainer extends React.Component {

  static propTypes = {
    navigator: PropTypes.object,
    theaterData: PropTypes.object
  };
  static displayName = "FunctionsContainer";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Functions
        onPress={this._onPress.bind(this)}
        onFetch={this._onFetch.bind(this)}
      />
    );
  }

  _onPress(rowData) {
    this.props.navigator.push({
      title: rowData.name,
      component: ShowView,
      extraData: {showData: rowData}
    });
  }

  _onFetch(page = 1, callback, options) {
    api.getFunctions(this.props.theaterData.id, this.props.date).then(json => {
      this._handleResponse(json, callback);
    }).catch(error => {
      callback();
    });
  }

  _handleResponse(json, callback) {
    if (json.shows && json.shows.length > 0) {
      callback(json.shows);
    }
    else {
      callback();
    }
  }
}
