'use strict';

import React from 'react';
import {Navigator, View, StyleSheet, Platform} from 'react-native';
import Relay from 'react-relay';
import config from '../config';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(`${config.URL}${config.graphqlPath}`, {
    headers: config.headers,
    fetchTimeout: 30000,
    retryDelays: [5000, 10000]
  })
);

import codePush from "react-native-code-push";
var Analytics = require('react-native-firebase-analytics');

import renderRelayScene from './RenderScene/RenderRelayScene';
import renderNormalScene from './RenderScene/RenderNormalScene';
import {colors} from '../Data';
import Menu from '../Menu';
import Content from './Content';


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
          Component: Content
        }}
        renderScene={(route, navigator) => {
          let props = {superNavigator: navigator};
          if (route.queryConfig !== undefined){
            var scene = renderRelayScene(route, navigator, props);
          }
          else {
            var scene = renderNormalScene(route, navigator, props);
          }
          return (
            <View style={styles.container}>
              {scene}
            </View>
          );
        }}
        configureScene={(route, routeStack) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FadeAndroid;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
});