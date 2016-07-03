'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { colors } from '../Data';
import { RightAccessoryView, MyListViewCell } from './';
import {getImdbView, getRottenTomatoesView, getMetacriticView, ImageHelper} from '../Utils'

export default class MovieCell extends React.Component {

  static propTypes = {
    rowNumber: PropTypes.number,
    onPress: PropTypes.func,
    isBillboard: PropTypes.bool,
    showName: PropTypes.string,
    showDebut: PropTypes.string,
    showGenres: PropTypes.string,
    showDuration: PropTypes.number,
    showRating: PropTypes.string,
    showImageUrl: PropTypes.string,
    showImdbCode: PropTypes.string,
    showImdbScore: PropTypes.number,
    showMetacriticUrl: PropTypes.string,
    showMetacriticScore: PropTypes.number,
    showRottenTomatoesUrl: PropTypes.string,
    showRottenTomatoesScore: PropTypes.number,
    showingScores: PropTypes.bool,
  };

  render() {
    const {
      rowNumber,
      onPress,
      showImageUrl
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
              source={{uri: ImageHelper.addPrefixToPath(showImageUrl, 'smaller_')}}
            />
          </View>
          {this._getDynamicView()}
        </View>
      </MyListViewCell>
    );
  }

  _getDynamicView() {
    const {showName, showingScores} = this.props;
    if (showingScores) {
      const {
        showImdbCode,
        showImdbScore,
        showMetacriticUrl,
        showMetacriticScore,
        showRottenTomatoesUrl,
        showRottenTomatoesScore
      } = this.props;
      return(
        <View style={styles.textContainer}>
          <Text style={styles.name}>{showName}</Text>
          <View style={styles.scoresView}>
              {getImdbView(showImdbCode, showImdbScore)}
              {getMetacriticView(showMetacriticUrl, showMetacriticScore)}
              {getRottenTomatoesView(showRottenTomatoesUrl, showRottenTomatoesScore)}
          </View>
        </View>
      );
    }
    else {
      const {
        isBillboard,
        showGenres,
        showDuration,
        showRating,
        showDebut
      } = this.props;
      const specificContent = isBillboard ? 
        [
          getSubtitleView(showDuration, `${showDuration} minutos`),
          getSubtitleView(showRating)
        ] :
        [
          getSubtitleView(showDebut),
        ];
      return(
        <View style={styles.textContainer}>
          <Text key='name' style={styles.name}>{showName}</Text>
          {getSubtitleView(showGenres)}
          {specificContent}
        </View>
      );
    }
  }
}

const getSubtitleView = (variable, customText = null) => {
  if ((typeof variable === 'number' && variable > 0) ||
      (typeof variable === 'string' && variable.length > 0)) {
    const text = customText ? customText : variable;
    return (
      <Text key={text} style={styles.subtitle}>{text}</Text>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'gray',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, height: 0
    }
  },
  image: {
    width: 80,
    height: 120
  },
  scoresView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    alignSelf: 'flex-start',
  },
  name: {
    fontSize: 20,
    color: colors.navBar,
    fontWeight: '500',
    marginBottom: 4
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
    marginBottom: 4
  },
});
