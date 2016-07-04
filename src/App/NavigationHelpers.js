'use strict';

import React from 'react';
import {Navigator} from 'react-native';
import {StyleSheet, Platform} from 'react-native';

import MyNavigationBar from './MyNavigationBar';
import {NavigationBarRouteMapper} from './NavigationBarRouteMapper';

import {colors} from '../Data';

export const getMyNavigationBar = () => {
	return(
		<MyNavigationBar
	    routeMapper={NavigationBarRouteMapper}
	    style={styles.navigationBar}
	  />
	);
};

export const configureScene = (route, routeStack) => {
  if (Platform.OS === 'android') {
    return Navigator.SceneConfigs.FadeAndroid;
  }
  return Navigator.SceneConfigs.FloatFromRight;
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: colors.navBar
  }
});