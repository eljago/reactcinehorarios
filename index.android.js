'use strict';

var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  DrawerLayoutAndroid,
  Dimensions
} = React;

global.colors = require('./App/Data/colors');
global.api = require('./App/Utils/api');

var Menu = require('./App/Views/Menu');
var NavMain = require('./App/Views/NavMain');
var helper = {};

var _navigator = null;

var DRAWER_WIDTH_LEFT = 56;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (helper.getNavigator().getCurrentRoutes().length === 1  ) {
     return false;
  }
  helper.getNavigator().pop();
  return true;
});

var CineHorariosApp = React.createClass({
  componentDidMount: function() {
    helper.closeMenu = this._closeMenu;
    helper.openMenu = this._openMenu;
  },

  render() {
    return (
      <DrawerLayoutAndroid
        ref={(drawer) => { this.drawer = drawer; }}
        drawerWidth={2*Dimensions.get('window').width/3}
        drawerPosition={DrawerLayoutAndroid.positions.Right}
        renderNavigationView={() => <Menu helper={helper}/>}>
        <NavMain helper={helper}
      />
      </DrawerLayoutAndroid>
    );
  },

  _closeMenu: function() {
    this.drawer.closeDrawer();
  },
  _openMenu: function() {
    this.drawer.openDrawer();
  },

  _handleBackButtonPress: function() {
    helper.getNavigator().pop();
  }

});

AppRegistry.registerComponent('CineHorarios', function() { return CineHorariosApp });
