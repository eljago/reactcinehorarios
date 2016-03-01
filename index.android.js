'use strict';

var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  DrawerLayoutAndroid,
  Dimensions
} = React;

var Menu = require('./App/Views/Menu');
var NavMain = require('./src/App/MainView');
var helper = {};

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

        <MainView toggleMenu={this._toggleMenu}/>
        
      </DrawerLayoutAndroid>
    );
  },

  _toggleMenu: () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

});

AppRegistry.registerComponent('CineHorarios', function() { return CineHorariosApp });
