'use strict';

import React, { AppRegistry } from 'react-native'

import SideMenu from 'react-native-side-menu';

import Menu from './src/Menu';
import MainView from './src/App/MainView';

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
        menu={ <Menu /> }>

        <MainView toggleMenu={this._toggleMenu}/>

      </SideMenu>
    );
  }

  _toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

}

AppRegistry.registerComponent('CineHorarios', function() { return CineHorariosApp });
