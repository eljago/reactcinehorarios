'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
} = React;

var colors = require('../../../../../../Data/colors');

module.exports = StyleSheet.create({

  rowContainer: {
  	flex: 1,
  	flexDirection: 'row',
  	alignItems: 'center',
  },
  textContainer: {
  	flex: 1,
  	margin: 10
  },
  imageContainer: {
  	margin: 10
  },
  image: {
  	width: 60,
  	height: 90
  },
  name: {
  	fontSize: 18
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
});