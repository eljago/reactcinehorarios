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
    padding: 10,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 22,
    color: colors.navBar,
  },
  genres: {
    fontSize: 18,
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
  }
});
