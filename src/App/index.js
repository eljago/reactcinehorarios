'use strict';

import React, { StyleSheet, Text, StatusBar, View, Platform } from 'react-native';

import Relay from 'react-relay'
import config from '../../config'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(`${config.URL}${config.graphqlPath}`, {
    headers: config.headers,
    fetchTimeout: 30000,
    retryDelays: [5000, 10000]
  })
);

import codePush from "react-native-code-push";

import {colors} from '../Data';

import SideMenu from 'react-native-side-menu';
import Menu from '../Menu';
import Nav from './Nav';

export default class App extends React.Component {

  componentDidMount() {
    codePush.sync();
  }
  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    let statusBarProps = null;
    if (Platform.OS === 'android') {
      statusBarProps = {
        translucent: false,
        backgroundColor: colors.navBar
      }
    }
    else if (Platform.OS === 'ios') {
      statusBarProps = {
        translucent: true,
        backgroundColor: "rgba(0, 0, 0, 0.2)"
      }
    }
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          {...statusBarProps}
        />
        <SideMenu
          menuPosition='right'
          touchToClose={true}
          isOpen={this.state.isOpen}
          disableGestures={false}
          menu={<Menu onPress={this._onPress.bind(this)} />}>

          <Nav ref={"navMain"} openMenu={this._openMenu.bind(this)} />
        </SideMenu>
      </View>
    );
  }

  _openMenu() {
    this.setState({
      isOpen: true
    });
  }

  _onPress(routeData) {
    this.refs.navMain.getNavigator().resetTo(routeData);
    this.setState({
      isOpen: false
    });
  }
}