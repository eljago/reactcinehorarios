'use strict';

import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  ListView,
  TouchableHighlight
} from 'react-native';

import ComponentImages from './ComponentImages';
import ComponentRightButton from './ComponentRightButton';
import ComponentScoreButton from './ComponentScoreButton';

import {colors} from '../../Data';
import {ImageHelper} from '../../Utils';

export default class ComponentShow extends React.Component {

  static propTypes = {
    show: PropTypes.object.isRequired,
    onGoToImages: PropTypes.func,
    onGoToCast: PropTypes.func
  };

  constructor(props) {
    super(props);

  }

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
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.shadowView}>
            <Image
              resizeMode='cover'
              style={styles.portraitImage}
              source={{uri: ImageHelper.addPrefixToPath(portrait_image.image_url, 'small_')}}
            >
              <View style={styles.viewTitleDetails}>
                <Text style={styles.title}>
                  {name}
                </Text>
                <View style={styles.viewDetails}>
                  {this._getDetailText(name_original)}
                  {this._getDetailText(year.toString())}
                  {this._getDetailText(rating)}
                  {this._getDetailText(genres)}
                  {this._getDetailText(estreno)}
                </View>
              </View>
              <View style={styles.rightMenu}>
                <ComponentRightButton
                  onPress={this.props.onGoToImages}
                  source={require('../../../assets/IconImages.png')}
                  color={'#45D264'}
                />
                <ComponentRightButton
                  onPress={this.props.onGoToImages}
                  source={require('../../../assets/IconActors.png')}
                  color={'#FFC956'}
                />
                <ComponentRightButton
                  onPress={this.props.onGoToImages}
                  source={require('../../../assets/IconVideos.png')}
                  color={'#E10B14'}
                />
                <ComponentRightButton
                  onPress={this.props.onGoToImages}
                  source={require('../../../assets/IconShowtimes.png')}
                  color={'#2B72E6'}
                />
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
      </View>
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
    flexDirection: 'row',
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
  viewDetails: {
    flex: 1,
  },
  textDetails: {
    fontSize: 14,
    color: 'white',
    marginTop: 5
  },


  rightMenu: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    width: 50
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
