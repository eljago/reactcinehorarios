'use strict';

var React = require('react-native');
var {
  Platform,
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 12,
    flex: 1
  },
  icon: {
    height: 34,
    width: 34,
    marginBottom: -8,
    tintColor: 'gray',
  },
  selectedIcon: {
    height: 34,
    width: 34,
    marginBottom: -8,
    tintColor: 'white'
  }
});
