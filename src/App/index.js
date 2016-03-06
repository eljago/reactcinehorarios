'use strict';

import React, { StyleSheet } from 'react-native'

import Router from 'react-native-simple-router'

import SideMenu from 'react-native-side-menu'
import Menu from '../Menu'
import MainView from './MainView'

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <SideMenu
        menuPosition='right'
        touchToClose={true}
        isOpen={this.state.isOpen}
        disableGestures={true}
        menu={
          <Menu onPress={this._onPress.bind(this)} />
        }
      >
        <MainView
          ref={'mainview'}
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
    this.refs.mainview.refs.router.refs.navigator.resetTo({
      name: routeData.name,
      component: routeData.component
    });
    this.setState({
      isOpen: false
    });
  }
}