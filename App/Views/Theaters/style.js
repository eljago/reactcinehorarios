'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
  Platform
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 12
  },
});
