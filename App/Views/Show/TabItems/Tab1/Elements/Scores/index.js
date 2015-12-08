'use strict';

var React = require('react-native');
var {
  Image,
  View,
  TouchableHighlight,
  Text,
  Platform,
  PropTypes,
  AlertIOS,
  LinkingIOS
} = React;

var styles = require('./style');
var colors = global.colors;

module.exports = React.createClass({

	propTypes: {
		show: PropTypes.object.isRequired
	},

	render: function() {
		var show = this.props.show;

    // IMDB

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
        onPress={() => this._onPressImdb(show.imdb_code)}>
        <View style={styles.score}>
          <Image style={styles.image} source={require('./Images/LogoImdb.png')}/>
          <Text style={styles.scoresText}>{imdb_text}</Text>
        </View>
      </TouchableHighlight>;
    }

    // METACRITIC

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
          onPress={() => this._onPressMetacritic(show.metacritic_url)}>
          <View style={styles.score}>
            <Image style={styles.image} source={require('./Images/LogoMetacritic.png')}/>
            <Text style={styles.scoresText}>{metacritic_text}</Text>
          </View>
        </TouchableHighlight>;
    }

    // ROTTEN TOMATOES

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
          onPress={() => this._onPressRottenTomatoes(show.rotten_tomatoes_url)}>
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
	},


  _onPressImdb: function(imdb_code) {

    var url1 = `http://m.imdb.com/title/${imdb_code}`;
    var url2 = `imdb:///title/${imdb_code}/`;

    var canOpenSafari = false;
    var canOpenImdbApp = false;

    // Will check these three bools after getting each Callback
    var gotResultSafari = false;
    var gotResultImdb = false;

    if (Platform.OS === 'ios') {
      LinkingIOS.canOpenURL(url1, (supported) => {
        canOpenSafari = supported;
        gotResultSafari = true;
        if (gotResultSafari && gotResultImdb) {
          this._openAlert(canOpenSafari, canOpenImdbApp, url1, url2);
        }
      });
      LinkingIOS.canOpenURL(url2, (supported) => {
        canOpenImdbApp = supported;
        gotResultImdb = true;
        if (gotResultSafari && gotResultImdb) {
          this._openAlert(canOpenSafari, canOpenImdbApp, url1, url2);
        }
      });
    }
  },
  _onPressMetacritic: function(metacritic_url) {
    LinkingIOS.canOpenURL(metacritic_url, (supported) => {
      LinkingIOS.openURL(metacritic_url);
    });
  },
  _onPressRottenTomatoes: function(rotten_tomatoes_url) {
    LinkingIOS.canOpenURL(rotten_tomatoes_url, (supported) => {
      LinkingIOS.openURL(rotten_tomatoes_url);
    });
  },

  _openAlert: function(canOpenSafari, canOpenImdbApp, url1, url2) {
    if (canOpenImdbApp) {
      LinkingIOS.openURL(url2);
    }
    else if (canOpenSafari) {
      LinkingIOS.openURL(url1);
    }
  }

});