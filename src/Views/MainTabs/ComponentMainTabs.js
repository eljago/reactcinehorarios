'use strict';

import React, {PropTypes} from 'react';
import { StatusBar, View, StyleSheet, Platform, Image } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import {colors} from '../../Data';

export default class ComponentMainTabs extends React.Component {
  
  static propTypes = {
    tabBarRoutes: PropTypes.array,
    selectedTab: PropTypes.string,
    onPressTabBarItem: PropTypes.func
  };

  render() {
    return (
      <TabNavigator tabBarStyle={styles.tabBar}>
        {this._getTabBarIOSItems()}
      </TabNavigator>
    );
  }

  _getTabBarIOSItems() {
    const {tabBarRoutes, selectedTab, onPressTabBarItem} = this.props;

    return tabBarRoutes.map((route) => {
      return (
        <TabNavigator.Item
          selected={selectedTab === route.title}
          onPress={() => {onPressTabBarItem(route)}}
          key={route.title}
          title={route.title}
          renderIcon={() =>  <Image source={route.tabBarIcon} style={styles.icon}/>}
          renderSelectedIcon={() => <Image source={route.tabBarIcon} style={styles.iconSelected}/>}
          titleStyle={styles.iconTitle}
          selectedTitleStyle={styles.iconTitleSelected}
        >
          {route.renderScene(this.props.navigator)}
        </TabNavigator.Item>
      );
    });
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.tabBar
  },
  icon: {
    tintColor: 'gray'
  },
  iconSelected: {
    tintColor: 'white'
  },
  iconTitle: {
    color: 'gray'
  },
  iconTitleSelected: {
    color: 'white'
  }
});