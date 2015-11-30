'use strict';

var React = require('react-native');
var {
  Platform,
  StyleSheet,
} = React;

var colors = require('../../Data/colors');

module.exports = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 12,
    flex: 1
  },
  icon: {
    height: 36,
    width: 36,
    marginBottom: -10,
    tintColor: 'gray',
    backgroundColor: 'transparent'
  },
  selectedIcon: {
    height: 36,
    width: 36,
    marginBottom: -10,
    tintColor: colors.navBar
  }
});
