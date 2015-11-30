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
    padding: 10,
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 22,
    color: colors.navBar,
  },
  functionView: {
  	marginTop: 5
  },
  functionTypes: {
  	color: 'gray',
    fontSize: 16,
    marginTop: 5
  },
  showtimes: {
    fontFamily: 'Courier',
    fontSize: 18,
    color: '#000',
    marginTop: 5
  },
  image: {
    flex: 1
  },
  imageContainer: {
    width: 80,
    height: 120,
    alignSelf: 'flex-start',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, height: 0
    }
  },
  rightAccessoryView: {
    width: 22,
    height: 22,
  }
});
