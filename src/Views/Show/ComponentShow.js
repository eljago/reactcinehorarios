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

import {colors} from '../../Data';
import {ImageHelper} from '../../Utils';

const MARGIN_LEFT = 15;

export default class ComponentShow extends React.Component {

  static propTypes = {
    show_id: PropTypes.number,
    name: PropTypes.string,
    name_original: PropTypes.string,
    image_url: PropTypes.string,
    information: PropTypes.string,
    debut: PropTypes.string,
    duration: PropTypes.number,
    genres: PropTypes.string,
    imdb_code: PropTypes.string,
    imdb_score: PropTypes.number,
    metacritic_url: PropTypes.string,
    metacritic_score: PropTypes.number,
    rotten_tomatoes_url: PropTypes.string,
    rotten_tomatoes_score: PropTypes.number,
    year: PropTypes.number,
    rating: PropTypes.string,
    portrait_image: PropTypes.object
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
      rotten_tomatoes_score
    } = this.props;

    const estreno = debut ? `Estreno: ${debut}` : null;
    return(
      <ScrollView>
        <Image
          resizeMode='cover'
          style={styles.portraitImage}
          source={{uri: ImageHelper.addPrefixToPath(portrait_image.image_url, 'smaller_')}}
        >
          <View style={styles.portraitView}>
            <Text style={styles.title}>
              {name}
            </Text>
            <View style={styles.portraitViewRow}>
              <Image
                resizeMode='stretch'
                style={styles.coverImage}
                source={{uri: ImageHelper.addPrefixToPath(image_url, 'smaller_')}}
              />
              <View style={styles.portraitViewDetails}>
                <Text style={styles.textDetails}>
                  {[name_original, year.toString(), rating, genres, estreno].filter((obj) => {
                    return typeof obj == "string" && obj.length > 0;
                  }).join('\n')}
                </Text>
                <View style={styles.scoresView}>
                  {this._getImdbScoreView()}
                  {this._getMetacriticScoreView()}
                  {this._getRottenTomatoesScoreView()}
                </View>
              </View>
            </View>
          </View>
        </Image>

        <Text style={styles.information}>
          {information}
        </Text>

      </ScrollView>
    );
  }

  _getImdbScoreView() {
    let {imdb_code, imdb_score} = this.props;
    imdb_score = imdb_score > 0 ? imdb_score/10 : '?';
    if (typeof imdb_code == 'string' && imdb_code.length > 0) {
      return(
        <TouchableHighlight
          style={styles.scoreButton}
          onPress={() => {}}>
          <View style={styles.scoreView}>
            <Image
              style={styles.scoreLogo}
              source={require('../../Images/LogoImdb.png')}/>
            <Text style={styles.scoreText}>{imdb_score} / 10</Text>
          </View>
        </TouchableHighlight>
      );
    }
    else
      return null;
  }

  _getRottenTomatoesScoreView() {
    let {rotten_tomatoes_url, rotten_tomatoes_score} = this.props;
    rotten_tomatoes_score = rotten_tomatoes_score > 0 ? rotten_tomatoes_score : '?';
    if (typeof rotten_tomatoes_url == 'string' && rotten_tomatoes_url.length > 0) {
      return(
        <TouchableHighlight
          style={styles.scoreButton}
          onPress={() => {}}>
          <View style={styles.scoreView}>
            <Image
              style={styles.scoreLogo}
              source={require('../../Images/LogoRotten.png')}/>
            <Text style={styles.scoreText}>{rotten_tomatoes_score} %</Text>
          </View>
        </TouchableHighlight>
      );
    }
    else
      return null;
  }

  _getMetacriticScoreView() {
    let {metacritic_url, metacritic_score} = this.props;
    metacritic_score = metacritic_score > 0 ? metacritic_score : '?';
    if (typeof metacritic_url == 'string' && metacritic_url.length > 0) {
      return(
        <TouchableHighlight
          style={styles.scoreButton}
          onPress={() => {}}>
          <View style={styles.scoreView}>
            <Image
              style={styles.scoreLogo}
              source={require('../../Images/LogoMetacritic.png')}/>
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
  portraitImage: {
    height: Dimensions.get('window').width * 720 / 1280,
    width: Dimensions.get('window').width
  },
  portraitView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  portraitViewRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: MARGIN_LEFT,
    marginRight: MARGIN_LEFT,
    marginTop: 10
  },
  portraitViewDetails: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: MARGIN_LEFT,
    justifyContent: 'space-between'
  },
  textDetails: {
    flex: 1,
    fontSize: 14,
    color: 'white',
  },
  coverImage: {
    width: 90,
    height: 135,
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, height: 0
    },
  },
  title: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: MARGIN_LEFT,
    fontSize: 20,
    color: 'white',
  },
  information: {
    marginLeft: MARGIN_LEFT,
    marginRight: MARGIN_LEFT,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 14
  },
  scoresView: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around'
  },
  scoreButton: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  scoreView: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  scoreLogo: {
    width: 32,
    height: 32,
    margin: 5
  },
  scoreText: {
    color: 'white',
    fontSize: 14
  }
});
