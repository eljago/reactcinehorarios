'use strict';

import React, { Navigator, Component, Text, View } from 'react-native';
import Relay from 'react-relay'

import {getCinemasRoute} from '../routes/navigatorRoutes';
import renderRelayScene from './renderRelayScene';
import {colors} from '../Data';

export default class MyApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Navigator
          ref={'nav'}
          initialRoute={getCinemasRoute()}
          renderScene={renderRelayScene}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigationBarRouteMapper}
              style={{backgroundColor: colors.navBar}}
            />
          }
        />
      </View>
    );
  }

  getNavigator() {
  	return this.refs.nav;
  }
}

var NavigationBarRouteMapper = {

  LeftButton(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
      return null;
  },

  RightButton(route, navigator, index, navState) {
      return null;
  },

  Title(route, navigator, index, navState) {
      return <Text>Hola</Text>;
  },

};