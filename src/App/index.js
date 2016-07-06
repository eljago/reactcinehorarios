'use strict';

import React from 'react';
import {Navigator, StyleSheet} from 'react-native';
import Relay from 'react-relay';
import config from '../config';

import codePush from "react-native-code-push";
var Analytics = require('react-native-firebase-analytics');

import {getApplicationRoutes} from '../routes/MyRoutes';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(`${config.URL}${config.graphqlPath}`, {
    headers: config.headers,
    fetchTimeout: 30000,
    retryDelays: [5000, 10000]
  })
);

export default class App extends React.Component {

  componentDidMount() {
    // codePush.sync();

    // if (__DEV__) {
    //   console.log('DEV');
    //   Analytics.setEnabled(false);
    // }

    Analytics.logEvent('view_item', {
      'item_id': 'AppStart'
    });
  }

	render() {
		const tabBarRoute = getApplicationRoutes();
		return tabBarRoute.renderScene();
	}
}

