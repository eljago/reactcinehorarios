'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    color: '#000'
  },
  rightAccessoryView: {
    width: 22,
    height: 22,
  }
});
