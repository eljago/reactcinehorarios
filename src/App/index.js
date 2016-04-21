'use strict';

import React, { StyleSheet, Text, StatusBar, View } from 'react-native'

import codePush from "react-native-code-push";

import SideMenu from 'react-native-side-menu'
import Menu from '../Menu'
import Nav from './Nav'

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
    return (
      <View style={{flex: 1}}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
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