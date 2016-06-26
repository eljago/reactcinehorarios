'use strict';

import React, {PropTypes} from 'react';
import { Navigator, Text, View, Platform, BackAndroid } from 'react-native';

import {NavigationBarRouteMapper, configureScene} from '../NavigationBarRouteMapper';

import renderScene from '../RenderScene';
import {colors} from '../../Data';

let navigator = null;
if (Platform.OS === 'android') {
  BackAndroid.addEventListener('hardwareBackPress', () => {
    if (navigator) {
      if (navigator.superNavigator && navigator.superNavigator.getCurrentRoutes().length > 1) {
        navigator.superNavigator.pop();
        return true;
      }
      else if (navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
      }
    }
    return false;
  });
}

export default class MyApp extends React.Component {

  static propTypes = {
    superNavigator: PropTypes.object,
    initialRoute: PropTypes.object
  };

  componentDidMount() {
    navigator.superNavigator = this.props.superNavigator;
  }

  render() {
    return (
      <Navigator
        ref={(nav) => { navigator = nav; }}
        openMenu={this.props.openMenu}
        initialRoute={this.props.initialRoute}
        renderScene={renderScene}
        configureScene={configureScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={{backgroundColor: colors.navBar}}
          />
        }
      />
    );
  }
}