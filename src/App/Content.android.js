'use strict';

import React from 'react';
import { StatusBar, View, DrawerLayoutAndroid } from 'react-native';

import Nav from './Nav';
import Menu from '../Menu';
import {colors} from '../Data';

export default class Content extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          translucent={false}
          backgroundColor={colors.navBar}
        />
        <DrawerLayoutAndroid
          ref="drawer"
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => {
            return <Menu onPress={this._onPress.bind(this)} />;
          }}
        >
          <View style={{flex: 1}}>
            <Nav ref={"nav"} openMenu={this._openMenu.bind(this)}/>
          </View>
        </DrawerLayoutAndroid>
      </View>
    );
  }

  _openMenu() {
    this.refs.drawer.openDrawer();
  }

  _onPress(routeData) {
    this.refs.nav.getNavigator().resetTo(routeData);
    this.refs.drawer.closeDrawer();
  }
}