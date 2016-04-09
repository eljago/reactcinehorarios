'use strict';

import React from 'react-native'
import Relay from 'react-relay'

import config from './config'

import App from './src/App'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(`${config.URL}${config.graphqlPath}`, {headers: config.headers})
);


React.AppRegistry.registerComponent('CineHorarios', function() { return App });
