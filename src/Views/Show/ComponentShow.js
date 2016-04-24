'use strict';

import React, { PropTypes, Image, View, Text, ScrollView, StyleSheet } from 'react-native';
import {colors} from '../../Data';

class ContainerShow extends React.Component{

  static propTypes = {
    onPress: PropTypes.func,
    show: PropTypes.object
  };

  render() {
    const show = this.props.show;
    if (show) {
      const  {
        name,
        image_url,
        name_original,
        information,
        debut,
        duration,
        genres,
        has_functions,
        imdb_code,
        imdb_score,
        rotten_tomatoes_url,
        rotten_tomatoes_score,
        metacritic_url,
        metacritic_score,
        year,
        rating
      } = show;
      
      var showNameOriginal = null;
      if (show.name_original && show.name_original.length > 0) {
        showNameOriginal = <Text style={styles.nameOriginal}>{show.name_original}</Text>;
      }
      var showYear = null;
      if (show.year && show.year > 0) {
        showYear = <Text style={styles.year}>({show.year})</Text>
      }
      var showDuration = null;
      if (show.duration && show.duration > 0) {
        showDuration = <Text style={styles.duration}>{`${show.duration} minutos`}</Text>;
      }
      var showGenres;
      if (show.genres && show.genres.length > 0) {
        showGenres = <Text style={styles.genres}>{show.genres}</Text>
      };
      var information = null;
      if (show.information && show.information.length > 0) {
        information =
          <Text style={styles.information}>
            {show.information}
          </Text>
      }
      var scoresView = null;
      if ((show.imdb_code && show.imdb_code.length > 0) || 
          (show.rotten_tomatoes_url && show.rotten_tomatoes_url.length > 0) || 
          (show.metacritic_url && show.metacritic_url.length > 0)) {
        scoresView = <Scores show={show} style={styles.scores}/>
      }

      return (
        <ScrollView style={styles.container}>
          {this._getHeaderView()}
          <View style={styles.secondView}>
            {this._getPortraitImageView()}
            <View style={styles.details}>
              {showNameOriginal}
              {showYear}
              {showDuration}
              {showGenres}
            </View>
          </View>
          {information}
          {scoresView}
        </ScrollView>
      );
    }
    else { // BEFORE DOWNLOADING
      var propsShow = this.props.extraData.showData;
      return (
        <ScrollView style={styles.container}>
          {this._getHeaderView()}
          <View style={styles.secondView}>
            {this._getPortraitImageView()}
            <View style={styles.details}>
              <Text style={styles.genres}>{propsShow.genres}</Text>
            </View>
          </View>
        </ScrollView>
      );
    }
  }

  _getHeaderView() {
    return(
      <View style={[styles.viewHeader, styles.shadow]}>
        <Image
          source={{uri: api.getFullURL(this.props.extraData.showData.portrait_image)}}
          style={styles.portraitImage}>
          <Text style={styles.showName}>{this.props.extraData.showData.name}</Text>
        </Image>
      </View>
    );
  }

  _getPortraitImageView() {
    return(
      <View style={[styles.imageContainer, styles.shadow]}>
        <Image
          source={{uri: api.getFullURL(imageHelper.getThumbImage(this.props.extraData.showData.image_url))}}
          style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
