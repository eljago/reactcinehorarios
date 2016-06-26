'use strict';

import React, {PropTypes} from 'react';
import { StatusBar, View, StyleSheet, Platform, Image } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Nav from './Nav';
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
        <TabNavigator
          tabBarStyle={styles.tabBar}
        >
          {this._getTabBarIOSItems()}
        </TabNavigator>
      </View>
    );
  }

  _getTabBarIOSItems() {
    return getBaseRoutes().map((route) => {
      return (
        <TabNavigator.Item
          key={route.title}
          selected={this.state.selectedTab === route.title}
          title={route.title}
          renderIcon={() => 
            <Image
              source={route.icon}
              style={styles.icon}
            />
          }
          renderSelectedIcon={()  => 
            <Image
              source={route.icon}
              style={styles.iconSelected}
            />
          }
          onPress={() => {this._onPressTabBarItem(route)}}
          titleStyle={styles.iconTitle}
          selectedTitleStyle={styles.iconTitleSelected}
        >
          {this._getTabItem(route)}
        </TabNavigator.Item>
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