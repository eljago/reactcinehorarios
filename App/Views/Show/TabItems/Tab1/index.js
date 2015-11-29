'use strict';

var React = require('react-native');
var {
  Image,
  View,
  Text,
  ScrollView,
  PropTypes
} = React;

var imageHelper = require('../../../../Utils/ImageHelper');
var colors = require('../../../../Data/colors');
var styles = require('./style');
var Scores = require('./Elements/Scores');

module.exports = React.createClass({

  propTypes: {
    show: PropTypes.object.isRequired,
    extraData: PropTypes.object.isRequired
  },

  render: function() {
    var show = this.props.show;
    if (show) {
      var showNameOriginal = null;
      if (show.name_original && show.name_original.length > 0) {
        showNameOriginal = <Text style={styles.nameOriginal}>{show.name_original}</Text>;
      }
      var showYear = null;
      if (show.year && show.year > 0) {
        showYear = <Text style={styles.year}>{show.year}</Text>
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
          <View style={styles.informationView}>
            <Text style={styles.informationTitle}>
              Sinópsis:
            </Text>
            <Text style={styles.information}>
              {show.information}
            </Text>
          </View>
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
  },

  _getHeaderView: function() {
    return(
      <View style={[styles.viewHeader, styles.shadow]}>
        <Image
          source={{uri: this.props.api.getFullURL(this.props.extraData.showData.portrait_image)}}
          style={styles.portraitImage}>
          <Text style={styles.showName}>{this.props.extraData.showData.name}</Text>
        </Image>
      </View>
    );
  },
  _getPortraitImageView: function() {
    return(
      <View style={[styles.imageContainer, styles.shadow]}>
        <Image
          source={{uri: this.props.api.getFullURL(imageHelper.getThumbImage(this.props.extraData.showData.image_url))}}
          style={styles.image}/>
      </View>
    );
  },

  _onPressImdb: function() {

  },
  _onPressMetacritic: function() {

  },
  _onPressRottenTomatoes: function() {

  }
});
