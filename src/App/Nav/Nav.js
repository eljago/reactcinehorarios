'use strict';

import React, { Navigator, Component, Text, View } from 'react-native';

import {getCinemasRoute} from '../../routes/navigatorRoutes';
import renderScene from '../RenderScene';
import {colors} from '../../Data';

import {BackButton} from './BackButton'
import {MenuButton} from './MenuButton'

export default class MyApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Navigator
          ref={'nav'}
          initialRoute={getCinemasRoute()}
          renderScene={renderScene}
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
    return(
      <BackButton
        onPress={() => {
          navigator.pop();
        }}
      />
    );
  },

  RightButton(route, navigator, index, navState) {
    return(
      <MenuButton
        onPress={() => {
          navigator.pop();
        }}
      />
    );
  },

  Title(route, navigator, index, navState) {
      return <Text>Hola</Text>;
  },

};