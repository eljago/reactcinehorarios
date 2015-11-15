'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

  scoresView: {
    flex: 1,
    flexDirection: 'row',
  },
  score: {
    flex: 1,
    alignItems: 'center',
  },
  scoresText: {
    fontSize: 16
  },
  image: {
    width: 32,
    height: 32
  }
});