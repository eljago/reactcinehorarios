'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
} = React;

var colors = require('../../../../Data/colors');

module.exports = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeaderView: {
  	flex: 1,
  	padding: 5,
  	backgroundColor: colors.header
  },
  sectionText: {
  	fontSize: 16,
  	color: 'white',
  	marginLeft: 5,
  }
});