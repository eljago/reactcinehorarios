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
        unselectedTintColor="yellow"
        tintColor="white"
        translucent={true}
        barTintColor={colors.tabBar}>

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
          selected={this.state.selectedTab === route.title}
          onPress={() => {
            this.setState({
              selectedTab: route.title,
            });
          }}
        >
          <View style={styles.tabContent}>
            <Nav initialRoute={route}/>
          </View>
        </TabBarIOS.Item>
      );
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