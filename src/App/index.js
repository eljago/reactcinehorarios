'use strict';

import React, { StyleSheet, Text } from 'react-native'

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
      <SideMenu
        menuPosition='left'
        touchToClose={true}
        isOpen={this.state.isOpen}
        disableGestures={true}
        menu={
          <Menu onPress={this._onPress.bind(this)} />
        }
      >
        <Nav
          ref={"navMain"}
          openMenu={this._openMenu.bind(this)}
        />
      </SideMenu>
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