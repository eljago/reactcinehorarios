'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StatusBarIOS
} = React;

global.colors = require('./App/Data/colors');
global.api = require('./App/Utils/api');

var Menu = require('./App/Views/Menu');
var SideMenu = require('react-native-side-menu');
var MainView = require('./App/Views/NavMain');
var helper = {};

var CineHorariosApp = React.createClass({

  getInitialState: function() {
    return {
      isOpen: false
    };
  },

  componentDidMount: function() {
    helper.closeMenu = this._closeMenu;
    helper.openMenu = this._openMenu;
    StatusBarIOS.setStyle('light-content')
  },

  render() {
    return (
      <SideMenu
        menuPosition='right'
        touchToClose={true}
        isOpen={this.state.isOpen}
        menu={ <Menu helper={helper}/> }>
        <MainView helper={helper}/>
      </SideMenu>
    );
  },

  _closeMenu: function() {
    this.setState({
      isOpen: false
    });
  },
  _openMenu: function() {
    this.setState({
      isOpen: true
    });
  },

});

AppRegistry.registerComponent('CineHorarios', function() { return CineHorariosApp });
