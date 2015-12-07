'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
} = React;

var colors = global.colors;

module.exports = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  textContainer: {
    flex: 1,
    marginLeft: 15
  },
  name: {
    fontSize: 18,
  },
  rightAccessoryView: {
    width: 22,
    height: 22,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
});
