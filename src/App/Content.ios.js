'use strict';

import React, { StatusBar } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from '../Menu';
import Nav from './Nav';

export default class Content extends React.Component {
  
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
          barStyle="light-content"
          translucent={true}
          backgroundColor={"rgba(0, 0, 0, 0.2)"}
        />
        <SideMenu
          menuPosition='right'
          touchToClose={true}
          isOpen={this.state.isOpen}
          disableGestures={false}
          menu={<Menu onPress={this._onPress.bind(this)} />}>

          <Nav ref={"nav"} openMenu={this._openMenu.bind(this)} />
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
    this.refs.nav.getNavigator().resetTo(routeData);
    this.setState({
      isOpen: false
    });
  }
}