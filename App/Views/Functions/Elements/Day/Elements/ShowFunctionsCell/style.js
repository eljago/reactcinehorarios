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
    fontWeight: '300',
    color: colors.navBar,
  },
  functionView: {
  	marginTop: 5
  },
  functionTypes: {
    fontSize: 16,
    fontWeight: '300',
    color: 'gray',
    marginTop: 5
  },
  showtimes: {
    fontFamily: 'Verdana',
    fontSize: 15,
    color: '#000',
    marginTop: 2
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
