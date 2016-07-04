'use strict';

import React from 'react';
import {Navigator} from 'react-native';

import {getMyNavigationBar, configureScene} from './NavigationHelpers';

export default class App extends React.Component {
  
  render() {
    return (
      <Navigator
        initialRoute={}
        renderScene={(route, navigator) => {route.renderScene(navigator)}}
        configureScene={configureScene}
        navigationBar={getMyNavigationBar()}
      />
    );
  }
}