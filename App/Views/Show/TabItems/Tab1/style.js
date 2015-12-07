'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
} = React;

var colors = global.colors;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.silver,
  },

  // HEADER
  viewHeader: {
  	height: 140,
  	flex: 1,
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
      width: 0, height: 1
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
  portraitImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'black'
  },
  showName: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#000000',
    padding: 5,
    paddingLeft: 10,
    paddingTop: 4
  },
  nameOriginal: {
  	fontSize: 18,
    color: '#000',
    fontWeight: '300',
    marginBottom: 4
  },
  year: {
    fontSize: 16,
    color: '#000',
    fontWeight: '300',
    marginBottom: 4
  },
  duration: {
  	fontSize: 17,
    color: '#000',
    fontWeight: '300',
    marginBottom: 4
  },
  genres: {
  	fontSize: 17,
    color: '#000',
    fontWeight: '300'
  },

  // INFORMATION
  information: {
    margin: 15,
    marginTop: 5,
    fontSize: 18,
    color: '#000',
    fontWeight: '300'
  },

  // Scores
  scores: {
    flex: 1,
    margin: 10,
  }
});
