'use strict'

import React from 'react';
import {Text, Platform, Navigator} from 'react-native';

import {BackButton} from './Nav/BackButton';

import {colors} from '../Data';

export let NavigationBarRouteMapper = {

  LeftButton(route, navigator, index, navState) {
    var previousRoute = navState.routeStack[index - 1];
    if (previousRoute) {
      return(
        <BackButton
          onPress={() => {
            navigator.pop();
          }}
        />
      );
    }
    return null;
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
  }

};

export let configureScene = (route, routeStack) => {
  if (Platform.OS === 'android') {
    return Navigator.SceneConfigs.FadeAndroid;
  }
  return Navigator.SceneConfigs.FloatFromRight;
}