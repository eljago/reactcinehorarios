'use strict';

import React, {
  PropTypes,
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
          </Image>

          <View style={styles.imageAndInformation}>
            <View>
              <Image
                resizeMode='stretch'
                style={styles.coverImage}
                source={{uri: ImageHelper.addPrefixToPath(image_url, 'smaller_')}}
              />
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

        <View style={styles.bottomView}>
          <TouchableHighlight
            style={styles.bottomViewButton}
            onPress={this.props.onGoToImages}
          >
            <Image
              style={styles.bottomViewIcon}
              source={require('../../../assets/IconImages.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.bottomViewButton}
            onPress={this.props.onGoToCast}
          >
            <Image
              style={styles.bottomViewIcon}
              source={require('../../../assets/IconActors.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  _getDetailText(string) {
    if (typeof string == 'string' && string.length > 0) {
      return(
        <Text style={styles.textDetails}>{string}</Text>
      );
    }
    else
      return null;
  }

  _getImdbScoreView(imdb_code, imdb_score) {
    imdb_score = imdb_score > 0 ? imdb_score/10 : '?';
    if (typeof imdb_code == 'string' && imdb_code.length > 0) {
      return(
        <TouchableHighlight
          style={styles.scoreButton}
          underlayColor={colors.cellsUnderlayColor}
          onPress={() => {}}>
          <View style={styles.scoreView}>
            <Image
              style={styles.scoreLogo}
              source={require('../../../assets/LogoImdb.png')}/>
            <Text style={styles.scoreText}>{imdb_score} / 10</Text>
          </View>
        </TouchableHighlight>
      );
    }
    else
      return null;
  }

  _getRottenTomatoesScoreView(rotten_tomatoes_url, rotten_tomatoes_score) {
    rotten_tomatoes_score = rotten_tomatoes_score > 0 ? rotten_tomatoes_score : '?';
    if (typeof rotten_tomatoes_url == 'string' && rotten_tomatoes_url.length > 0) {
      return(
        <TouchableHighlight
          style={styles.scoreButton}
          underlayColor={colors.cellsUnderlayColor}
          onPress={() => {}}>
          <View style={styles.scoreView}>
            <Image
              style={styles.scoreLogo}
              source={require('../../../assets/LogoRotten.png')}/>
            <Text style={styles.scoreText}>{rotten_tomatoes_score} %</Text>
          </View>
        </TouchableHighlight>
      );
    }
    else
      return null;
  }

  _getMetacriticScoreView(metacritic_url, metacritic_score) {
    metacritic_score = metacritic_score > 0 ? metacritic_score : '?';
    if (typeof metacritic_url == 'string' && metacritic_url.length > 0) {
      return(
        <TouchableHighlight
          style={styles.scoreButton}
          underlayColor={colors.cellsUnderlayColor}
          onPress={() => {}}>
          <View style={styles.scoreView}>
            <Image
              style={styles.scoreLogo}
              source={require('../../../assets/LogoMetacritic.png')}/>
            <Text style={styles.scoreText}>{metacritic_score} / 100</Text>
          </View>
        </TouchableHighlight>
      );
    }
    else
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
  viewDetails: {
    flex: 1,
  },
  textDetails: {
    fontSize: 14,
    color: 'white',
    marginTop: 5
  },
  scoresView: {

  },
  scoreButton: {
    padding: 5
  },
  scoreView: {
    alignItems: 'center'
  },
  scoreLogo: {
    width: 32,
    height: 32,
    margin: 5
  },
  scoreText: {
    textAlign: 'center',
    fontSize: 13,
  },

  // COVER IMAGE AND INFORMATION
  imageAndInformation: {
    flexDirection: 'row',
    margin: 15
  },
  coverImage: {
    width: 80,
    height: 120,
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, height: 0
    }
  },
  information: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16
  },

  // BOTTOM VIEW
  bottomView: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: colors.tabBar,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  bottomViewButton: {
    flex: 1,
    alignItems: 'center'
  },
  bottomViewIcon: {
    width: 32,
    height: 32,
    margin: 9
  }
});
