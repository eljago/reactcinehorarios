'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
} = React;

var colors = global.colors;

module.exports = StyleSheet.create({
  navBar: {
    backgroundColor: colors.navBar,
  },
  scene: {
    flex: 1,
    paddingTop: 44,
    backgroundColor: 'white'
  },
  navBarTitle: {
    fontWeight: '500',
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
    paddingRight: 9,
    paddingLeft: 9
  },
  navBarButtonText: {
    color: 'white'
  },

  navigatorStyle: {
    backgroundColor: colors.concrete,
  },
  navBackImage: {
    tintColor: 'white',
  },
  menuIcon: {
    tintColor: 'white',
    marginRight: 5
  },
  navIcon: {
    height: 44,
    width: 44
  }
});
