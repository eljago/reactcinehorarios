'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF'
  },
  showImage: {
    flex: 2,
    width: 80,
    height: 120,
    marginRight: 10
  },
  portraitImage: {
    flex: 1,
    width: 200,
    height: 120,
    backgroundColor: 'black'
  }
});
