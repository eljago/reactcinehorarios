'use strict';

import React from 'react';
import {Navigator, StyleSheet} from 'react-native';
import Relay from 'react-relay';
import config from '../config';

import codePush from "react-native-code-push";
var Analytics = require('react-native-firebase-analytics');

import MyNavigationBar from './MyNavigationBar';
import {NavigationBarRouteMapper, configureScene} from './NavigationBarRouteMapper';
import renderScene from './RenderScene';

import {colors} from '../Data';
import Content from './Content';

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
    return (
      <Navigator
        initialRoute={{
          Component: Content,
          hideNavBar: true
        }}
        renderScene={(route, navigator) => {
          let props = {superNavigator: navigator};
          return renderScene(route, navigator, props);
        }}
        configureScene={configureScene}
        navigationBar={
          <MyNavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navigationBar}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  navigationBar: {
    backgroundColor: colors.navBar
  }
});