'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;

var Menu = require('./App/Views/Menu');
var SideMenu = require('react-native-side-menu');
var MainView = require('./App/Views/NavMain');
var helper = {};

var CineHorariosApp = React.createClass({

  componentDidMount: function() {
    helper.closeMenu = this._closeMenu;
    helper.openMenu = this._openMenu;
  },

  render() {
    return (
      <SideMenu
        menuPosition='right'
        touchToClose={true}
        menu={
          <Menu
            ref={(menu) => { this.menu = menu; }}
            helper={helper}
          />
        }>
        <MainView helper={helper}/>
      </SideMenu>
    );
  },

  _closeMenu: function() {
    this.menu.context.menuActions.close();
  },
  _openMenu: function() {
    this.menu.context.menuActions.open();
  },

});

AppRegistry.registerComponent('CineHorarios2', function() { return CineHorariosApp });
