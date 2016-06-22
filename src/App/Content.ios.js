'use strict';

import React, {PropTypes} from 'react';
import { StatusBar, View, StyleSheet, TabBarIOS, Platform } from 'react-native';

import Nav from './Nav';
import Menu from '../Menu';
import {getBaseRoutes} from '../routes/navigatorRoutes';

import {colors} from '../Data';
import renderRelayScene from './RenderScene/RenderRelayScene';
import renderNormalScene from './RenderScene/RenderNormalScene';

export default class Content extends React.Component {
  
  static propTypes = {
    superNavigator: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: getBaseRoutes()[0].title
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          translucent={false}
          backgroundColor={colors.navBar}
        />
        <TabBarIOS
          unselectedTintColor={colors.tabBarInactive}
          tintColor={colors.tabBarActive}
          translucent={false}
          barTintColor={colors.tabBar}
          style={styles.tabBar}
        >
          {this._getTabBarIOSItems()}
        </TabBarIOS>
      </View>
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
          {this._getTabItem(route)}
        </TabBarIOS.Item>
      );
    });
  }

  _getTabItem(route) {
    if (route.navigator) {
      return(
        <Nav
          ref={"nav"}
          initialRoute={route}
          superNavigator={this.props.superNavigator}
        />
      );
    }
    else {
      if (route.queryConfig !== undefined) {
        var scene = renderRelayScene(route, this.props.superNavigator);
      }
      else {
        var scene = renderNormalScene(route, this.props.superNavigator);
      }
      return (
        <View style={styles.container}>
          <View style={{height: 20, backgroundColor: colors.navBar}} />
          {scene}
        </View>
      );
    }
  }

  _onPressTabBarItem(route) {
    this.setState({
      selectedTab: route.title
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  tabBar: {
    backgroundColor: colors.tabBar
  }
});