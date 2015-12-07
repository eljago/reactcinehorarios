'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
  Dimensions
} = React;

var colors = global.colors;
var window = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: colors.midnightBlue,
  },
  listView: {
    flex: 1,
    backgroundColor: colors.midnightblue,
  },

  // ROW STYLES
  rowContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  textContainer: {
    padding: 10,
    flex: 2
  },
  name: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    flex: 1
  },
});
