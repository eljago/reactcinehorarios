'use strict';

import React, { StatusBar, View } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from '../Menu';
import Nav from './Nav';

export default class Content extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      disableGestures: false
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor={"rgba(0, 0, 0, 0.2)"}
        />
        <SideMenu
          ref='sideMenu'
          menuPosition='right'
          touchToClose={true}
          isOpen={this.state.isOpen}
          disableGestures={this._getMenuGesturesDisabled.bind(this)}
          menu={<Menu onPress={this._onPress.bind(this)} />}
        >
          <Nav 
            ref={"nav"}
            openMenu={this._openMenu.bind(this)}
          />
        </SideMenu>
      </View>
    );
  }

  _getMenuGesturesDisabled() {
    const currentRoutes = this.refs.nav.getNavigator().navigationContext._currentRoute;
    return currentRoutes.menuGesturesDisabled === true;
  }

  _openMenu() {
    this.setState({
      isOpen: true
    });
  }

  _onPress(routeData) {
    this.refs.nav.getNavigator().resetTo(routeData);
    this.setState({
      isOpen: false
    });
  }
}