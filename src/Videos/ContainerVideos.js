'use strict';

import React from 'react-native'

import { Api, DateFunctions } from '../Utils'
import ComponentVideos from './ComponentVideos'

export default class ContainerVideos extends React.Component {

  static displayName = "ContainerVideos";

  render() {
    return (
      <ComponentVideos
        onPress={this._onPress.bind(this)}
        onPressShow={this._onPressShow.bind(this)}
        onFetch={this._onFetch.bind(this)}
      />
    );
  }

  _onFetch(page = 1, callback, options) {
    Api.getVideos(page).then(json => {
      this._handleResponse(json, callback);
    }).catch(error => {

    });
  }

  _handleResponse(json, callback) {
    if (json.videos && json.videos.length > 0) {
      callback(json.videos);
    }
    else {
      callback();
    }
  }

  _onPressShow(rowData) {
    this.props.navigator.push({
      title: rowData.show.name,
      component: ShowView,
      extraData: {showData: rowData.show}
    });
  }

  _onPress(rowData) {
    var url = `https://www.youtube.com/watch?v=${rowData.code}`;
    if (Platform.OS === 'android') {
      IntentAndroid.canOpenURL(url, (supported) => {
        if (supported) {
          IntentAndroid.openURL(url);
        } else {
          console.log('Don\'t know how to open URI: ' + url);
        }
      });
    }
    else if (Platform.OS === 'ios') {

    }
  }
}
