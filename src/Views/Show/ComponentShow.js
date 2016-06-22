'use strict';

import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

import ComponentScoreButton from './ComponentScoreButton';

import {colors} from '../../Data';
import {ImageHelper} from '../../Utils';

export default class ComponentShow extends React.Component {

  static propTypes = {
    show: PropTypes.object.isRequired,
  };

  render() {
    const {
      image_url,
      portrait_image,
      name,
      genres,
      information,
      year,
      rating,
      debut,
      name_original,
      imdb_code,
      imdb_score,
      metacritic_url,
      metacritic_score,
      rotten_tomatoes_url,
      rotten_tomatoes_score,
      images
    } = this.props.show;

    const estreno = debut ? `Estreno: ${debut}` : null;
    return(
      <ScrollView style={styles.scrollView}>
        <View style={styles.shadowView}>
          <Image
            resizeMode='cover'
            style={styles.portraitImage}
            source={{uri: ImageHelper.addPrefixToPath(portrait_image.image_url, 'small_')}}
          >
            <View style={styles.viewTitleDetails}>
              <Text style={styles.title}>{name}</Text>
              {this._getDetailText(name_original)}
              {this._getDetailText(year.toString())}
              {this._getDetailText(rating)}
              {this._getDetailText(genres)}
              {this._getDetailText(estreno)}
            </View>
          </Image>
        </View>

        <View style={styles.imageAndInformation}>
          <View>
            <View style={styles.shadowView}>
              <Image
                resizeMode='stretch'
                style={styles.coverImage}
                source={{uri: ImageHelper.addPrefixToPath(image_url, 'smaller_')}}
              />
            </View>
            <View style={styles.scoresView}>
              {this._getImdbScoreView(imdb_code, imdb_score)}
              {this._getMetacriticScoreView(metacritic_url, metacritic_score)}
              {this._getRottenTomatoesScoreView(rotten_tomatoes_url, rotten_tomatoes_score)}
            </View>
          </View>
          <Text style={styles.information}>
            {information}
          </Text>
        </View>
      </ScrollView>
    );
  }

  _getDetailText(string) {
    if (typeof string == 'string' && string.length > 0) {
      return(
        <Text style={styles.textDetails}>{string}</Text>
      );
    }
    return null;
  }

  _getImdbScoreView(imdb_code, imdb_score) {
    imdb_score = imdb_score > 0 ? imdb_score/10 : '?';
    if (typeof imdb_code == 'string' && imdb_code.length > 0) {
      return(
        <ComponentScoreButton
          onPress={() => {}}
          source={require('../../../assets/LogoImdb.png')}
          text={`${imdb_score} / 10`}
        />
      );
    }
    return null;
  }

  _getRottenTomatoesScoreView(rotten_tomatoes_url, rotten_tomatoes_score) {
    rotten_tomatoes_score = rotten_tomatoes_score > 0 ? rotten_tomatoes_score : '?';
    if (typeof rotten_tomatoes_url == 'string' && rotten_tomatoes_url.length > 0) {
      return(
        <ComponentScoreButton
          onPress={() => {}}
          source={require('../../../assets/LogoRotten.png')}
          text={`${rotten_tomatoes_score} %`}
        />
      );
    }
    return null;
  }

  _getMetacriticScoreView(metacritic_url, metacritic_score) {
    metacritic_score = metacritic_score > 0 ? metacritic_score : '?';
    if (typeof metacritic_url == 'string' && metacritic_url.length > 0) {
      return(
        <ComponentScoreButton
          onPress={() => {}}
          source={require('../../../assets/LogoMetacritic.png')}
          text={`${metacritic_score} / 100`}
        />
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  portraitImage: {
    height: Dimensions.get('window').width * 720 / 1280,
    width: Dimensions.get('window').width
  },
  viewTitleDetails: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 15
  },
  title: {
    fontSize: 22,
    color: 'white',
  },

  textDetails: {
    fontSize: 14,
    color: 'white',
    marginTop: 5
  },


  scoresView: {

  },

  // COVER IMAGE AND INFORMATION
  imageAndInformation: {
    flexDirection: 'row',
    margin: 15
  },
  shadowView: {
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, height: 0
    }
  },
  coverImage: {
    width: 80,
    height: 120,
  },
  information: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16
  },
});