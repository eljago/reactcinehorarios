'use strict';

import React from 'react';
import { StatusBar, View, StyleSheet, TabBarIOS } from 'react-native';

import Menu from '../Menu';
import Nav from './Nav';
import {getBaseRoutes} from '../routes/navigatorRoutes';

import {colors} from '../Data';

export default class Content extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: getBaseRoutes()[0].title
    };
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor={colors.tabBarInactive}
        tintColor={colors.tabBarActive}
        translucent={true}
        barTintColor={colors.tabBar}
      >

        {this._getTabBarIOSItems()}

      </TabBarIOS>
    );
  }

  _getTabBarIOSItems() {
    return getBaseRoutes().map((route) => {
      return (
        <TabBarIOS.Item
          key={route.title}
          title={route.title}
          icon={route.icon}
          selected={this.state.selectedTab === route.title}
          onPress={() => {this._onPressTabBarItem(route)}}
        >
          <View style={styles.tabContent}>
            <Nav
              ref={"nav"}
              initialRoute={route}
            />
          </View>
        </TabBarIOS.Item>
      );
    });
  }

  _onPressTabBarItem(route) {
    this.setState({
      selectedTab: route.title
    });
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