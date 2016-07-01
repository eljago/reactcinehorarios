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

import {getImdbView, getRottenTomatoesView, getMetacriticView} from '../../Utils'

import ComponentScoreButton from './ComponentScoreButton';
import ComponentShowMenu from './ComponentShowMenu';

import {colors} from '../../Data';
import {ImageHelper} from '../../Utils';

export default class ComponentShow extends React.Component {

  static propTypes = {
    show: PropTypes.object.isRequired,
    onGoBack: PropTypes.func,
    onPressCast: PropTypes.func,
    onPressShowtimes: PropTypes.func,
    onPressVideos: PropTypes.func,
    onPressImages: PropTypes.func
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
      <ScrollView style={styles.scrollView} bounces={false}>

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

            <ComponentShowMenu
              onGoBack={this.props.onGoBack}
              onPressCast={this.props.onPressCast}
              onPressShowtimes={this.props.onPressShowtimes}
              onPressVideos={this.props.onPressVideos}
              onPressImages={this.props.onPressImages}
            />
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
              {getImdbView(imdb_code, imdb_score, true)}
              {getMetacriticView(metacritic_url, metacritic_score, true)}
              {getRottenTomatoesView(rotten_tomatoes_url, rotten_tomatoes_score, true)}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  portraitImage: {
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
    marginTop: 10,
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