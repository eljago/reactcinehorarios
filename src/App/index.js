'use strict';

import React from 'react';
import Relay from 'react-relay'
import config from '../config'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(`${config.URL}${config.graphqlPath}`, {
    headers: config.headers,
    fetchTimeout: 30000,
    retryDelays: [5000, 10000]
  })
);

import codePush from "react-native-code-push";

import Menu from '../Menu';
import Content from './Content';

export default class App extends React.Component {

  componentDidMount() {
    // codePush.sync();
  }
  render() {
    return (
      <Content />
    );
  }
}