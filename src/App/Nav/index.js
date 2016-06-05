'use strict';

import React, {PropTypes} from 'react';
import { Navigator, Text, View, Platform, BackAndroid } from 'react-native';

import renderScene from '../RenderScene';
import {colors} from '../../Data';

import NavigationBar from './NavigationBar';
import {BackButton} from './BackButton';
import {MenuButton} from './MenuButton';

let navigator = null;

BackAndroid.addEventListener('hardwareBackPress', () => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
});

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
        configureScene={(route, routeStack) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FadeAndroid;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        navigationBar={
          <NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={{backgroundColor: colors.navBar}}
          />
        }
      />
    );
  }

  getNavigator() {
    return navigator;
  }
}

var NavigationBarRouteMapper = {

	LeftButton(route, navigator, index, navState) {
    var previousRoute = navState.routeStack[index - 1];
    if (Platform.OS === 'android') {
      return(
        <MenuButton onPress={navigator.props.openMenu} />
      );
    }
    
    return(
      <BackButton
        onPress={() => {
          navigator.pop();
        }}
      />
    );
  },

  RightButton(route, navigator, index, navState) {
    return null;
  },

  Title(route, navigator, index, navState) {
      return(
				<Text
          style={{
            color: colors.navBarLetters,
            fontSize: 20,
            marginTop: 8
          }}
        >
          {route.title}
        </Text>
			);
  },

};