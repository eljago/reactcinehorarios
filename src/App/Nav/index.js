'use strict';

import React, { Navigator, Component, Text, View } from 'react-native';

import {getBaseRoutes} from '../../routes/navigatorRoutes';
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
          openMenu={this.props.openMenu}
          initialRoute={getBaseRoutes()[0]}
          renderScene={renderScene}
          configureScene={(route, routeStack) => {
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