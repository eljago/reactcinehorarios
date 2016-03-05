'use strict';

import React, { AppRegistry, StyleSheet } from 'react-native'

import Router from 'react-native-simple-router'

import SideMenu from 'react-native-side-menu'
import Menu from './src/Menu'
import MainView from './src/App/MainView'

class CineHorariosApp extends React.Component {
  
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
  }
}

AppRegistry.registerComponent('CineHorarios', function() { return CineHorariosApp });
