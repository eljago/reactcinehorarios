'use strict';

import React, { Navigator, Component, Text, View, Platform } from 'react-native';

import {getBaseRoutes} from '../../routes/navigatorRoutes';
import renderScene from '../RenderScene';
import {colors} from '../../Data';

import {BackButton} from './BackButton'
import {MenuButton} from './MenuButton'

let navigator = null;

React.BackAndroid.addEventListener('hardwareBackPress', () => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
});

export default class MyApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Navigator
          ref={(nav) => { navigator = nav; }}
          openMenu={this.props.openMenu}
          initialRoute={getBaseRoutes()[0]}
          renderScene={renderScene}
          configureScene={(route, routeStack) => {
            if (Platform.OS === 'android') {
              return Navigator.SceneConfigs.FloatFromBottomAndroid;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }}
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
  	return navigator;
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
        onPress={navigator.props.openMenu}
      />
    );
  },

  Title(route, navigator, index, navState) {
      return(
				<Text style={{color: 'white', fontSize: 20, marginTop: 8}}>{route.title}</Text>
			);
  },

};