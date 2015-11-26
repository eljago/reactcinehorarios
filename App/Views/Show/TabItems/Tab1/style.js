'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
} = React;

var colors = require('../../../../Data/colors');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.silver,
  },

  // HEADER
  viewHeader: {
  	height: 140,
  	flex: 1,
  	flexDirection: 'row'
  },
  imageHeader: {
  	flex: 5
  },
  imageContainer: {
    width: 80,
    height: 120
  },
  shadow: {
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, height: 0
    }
  },

  // TITLE
  image: {
    flex: 1
  },
  secondView: {
  	flex: 1,
    flexDirection: 'row',
    margin: 10
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10
  },
  showName: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  nameOriginal: {
  	fontSize: 19
  },
  year: {
    fontSize: 16
  },
  duration: {
  	fontSize: 17
  },
  genres: {
  	fontSize: 17
  },

  // INFORMATION
  informationView: {
    margin: 15,
    marginTop: 5,
    flex: 1,
  },
  informationTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  information: {
    fontSize: 18,
  },

  // Scores
  scores: {
    flex: 1,
    margin: 10,
  }
});
