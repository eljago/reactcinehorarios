'use strict';

var React = require('react-native');
var {
  Image,
  View,
  TouchableHighlight,
  Text,
  Platform,
  PropTypes
} = React;

var styles = require('./style');
var colors = require('../../../../../../Data/colors');

module.exports = React.createClass({

	propTypes: {
		show: PropTypes.object.isRequired
	},

	render: function() {
		var show = this.props.show;

    var imdb_view = null;
    var touchUnderlayColor = colors.concrete;
    if (Platform.OS === 'android') {
    	touchUnderlayColor = null
    }
    if (show.imdb_code) {
      var imdb_text = "? / 10";
      if (show.imdb_score) {
        imdb_text = `${show.imdb_score/10} / 10`;
      }
      imdb_view = 
      <TouchableHighlight
        style={{flex: 1}}
        underlayColor={touchUnderlayColor}
        onPress={this._onPressImdb}>
        <View style={styles.score}>
          <Image style={styles.image} source={require('./Images/LogoImdb.png')}/>
          <Text style={styles.scoresText}>{imdb_text}</Text>
        </View>
      </TouchableHighlight>;
    }
    var metacritic_view = null;
    if (show.metacritic_url) {
      var metacritic_text = "? / 100";
      if (show.metacritic_score) {
        metacritic_text = `${show.metacritic_score} / 100`;
      }
      metacritic_view =
        <TouchableHighlight
          style={{flex: 1}}
          underlayColor={touchUnderlayColor}
          onPress={this._onPressMetacritic}>
          <View style={styles.score}>
            <Image style={styles.image} source={require('./Images/LogoMetacritic.png')}/>
            <Text style={styles.scoresText}>{metacritic_text}</Text>
          </View>
        </TouchableHighlight>;
    }
    var rotten_tomatoes_view = null;
    if (show.rotten_tomatoes_url) {
      var rotten_tomatoes_text = "? %";
      if (show.rotten_tomatoes_score) {
        rotten_tomatoes_text = `${show.rotten_tomatoes_score} %`;
      }
      rotten_tomatoes_view =
        <TouchableHighlight
          style={{flex: 1}}
          underlayColor={touchUnderlayColor}
          onPress={this._onPressRottenTomatoes}>
          <View style={styles.score}>
            <Image style={styles.image} source={require('./Images/LogoRotten.png')}/>
            <Text style={styles.scoresText}>{rotten_tomatoes_text}</Text>
          </View>
        </TouchableHighlight>;
    }
		return(
      <View style={[styles.scoresView, this.props.style]}>
	      {imdb_view}
	      {metacritic_view}
	      {rotten_tomatoes_view}
	    </View>
    );
	}
});