'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { colors } from '../Data';
import { RightAccessoryView, MyListViewCell } from './';
import {getImdbView, getRottenTomatoesView, getMetacriticView} from '../Utils'

export default class MovieCell extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    rowNumber: PropTypes.number,
    onPress: PropTypes.func,
    subtitle: PropTypes.string,
    imageUri: PropTypes.string,
    imdb_code: PropTypes.string,
    imdb_score: PropTypes.number,
    metacritic_url: PropTypes.string,
    metacritic_score: PropTypes.number,
    rotten_tomatoes_url: PropTypes.string,
    rotten_tomatoes_score: PropTypes.number,
    showScores: PropTypes.bool
  };

  render() {
    const {
      title,
      rowNumber,
      onPress,
      subtitle,
      imageUri
    } = this.props;

    return(
      <MyListViewCell
        rowNumber={rowNumber}
        onPress={onPress}
      >
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode='stretch'
              style={styles.image}
              source={{uri: imageUri}}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.genres}>{subtitle}</Text>
            <View style={styles.scoresView}>
              {this._getScoresViews()}
            </View>
          </View>
        </View>
      </MyListViewCell>
    );
  }

  _getScoresViews() {
    const {
      imdb_code,
      imdb_score,
      metacritic_url,
      metacritic_score,
      rotten_tomatoes_url,
      rotten_tomatoes_score
    } = this.props;
    if (this.props.showScores) {
      return(
        [
          getImdbView(imdb_code, imdb_score),
          getMetacriticView(metacritic_url, metacritic_score),
          getRottenTomatoesView(rotten_tomatoes_url, rotten_tomatoes_score)
        ]
      );
    }
    return null;
  }
}

let styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
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
    fontSize: 20,
    color: colors.navBar,
    fontWeight: '500'
  },
  genres: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8
  },
  image: {
    flex: 1
  },
  imageContainer: {
    width: 80,
    height: 120,
    alignSelf: 'flex-start',
    backgroundColor: 'gray',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, height: 0
    }
  },
  scoresView: {
    flex: 1,
    flexDirection: 'row'
  }
});
