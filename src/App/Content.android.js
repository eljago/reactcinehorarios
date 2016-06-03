'use strict';

import React from 'react';
import { StatusBar, View, DrawerLayoutAndroid, StyleSheet } from 'react-native';

import Nav from './Nav';
import Menu from '../Menu';
import {colors} from '../Data';
import {getBaseRoutes} from '../routes/navigatorRoutes';

export default class Content extends React.Component {

  render() {
    return (
      <View style={styles.container}>
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
          <View style={styles.tabContent}>
            <Nav
              initialRoute={getBaseRoutes()[0]}
              ref={"nav"}
              openMenu={this._openMenu.bind(this)}
            />
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabContent: {
    flex: 1
  }
});