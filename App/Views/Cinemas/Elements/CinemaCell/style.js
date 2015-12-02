'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
} = React;

var colors = require('../../../../Data/colors');

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
  image: {
    width: 80,
    height: 80,
  },
  name: {
    fontSize: 27,
    fontWeight: '300',
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
