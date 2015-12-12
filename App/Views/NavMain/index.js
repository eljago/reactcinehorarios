'use strict';

var React = require('react-native');

var {
  View,
  StyleSheet,
  Navigator,
  Text,
  TouchableOpacity,
  Image
} = React;

var CinemasView = require('../Cinemas');
var helper = null;

var styles = require('./style');

var MainView = React.createClass({

  componentDidMount: function() {
    helper = this.props.helper;
    helper.getNavigator = this._getNavigator;
  },
  _getNavigator: function() {
    return this.navigator;
  },

  contextTypes: {
    menuActions: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <Navigator
        style={styles.navigatorStyle}
        initialRoute={{title: 'Cines', component: CinemasView}}
        renderScene={this.renderScene}
        sceneStyle={styles.scene}
        ref={(navigator) => { this.navigator = navigator; }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  },

  renderScene: function(route, navigator) {
    var Component = route.component;
    return <Component extraData={route.extraData} navigator={navigator}/>
  }
});

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}>
        <Image
          style={[styles.navBackImage, styles.navIcon]}
          source={require('./Images/MenuBackIcon.png')}/>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={ () => { helper.openMenu() } }>
        <Image
          style={[styles.menuIcon, styles.navIcon]}
          source={require('./Images/MenuIcon.png')}/>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    var title = route.title.length > 25 ? `${route.title.substring(0,25)}...` : route.title;
    return (
      <Text style={styles.navBarTitle} numberOfLines={1}>
        {title}
      </Text>
    );
  },
}

module.exports = MainView;
