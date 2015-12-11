'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  TouchableHighlight,
  View,
  Platform,
  LinkingIOS,
} = React;

var WebIntent = require('react-native-webintent');

var colors = global.colors;
var api = global.api;
var imageHelper = require('../../../../../../Utils/ImageHelper');
var styles = require('./style');

module.exports = React.createClass({

  render: function() {
    var data = this.props.data;
    var imdbButton = null;
    if (data.imdb_code) {
      imdbButton = 
            <TouchableHighlight
              style={{marginRight: 20, padding: 10}}
              underlayColor={colors.concrete}
              onPress={() => this._goImdb()}>
              <Image 
                source={require('../../../Tab1/Elements/Scores/Images/LogoImdb.png')}
              />
            </TouchableHighlight>
    }

    var cellBackgroundColor = data.rowNumber % 2 == 0 ? 'white' : colors.silver;

    return(
      <View style={{backgroundColor: cellBackgroundColor}}>
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>
            <Image
            resizeMode='cover'
            style={styles.image}
            source={{uri: api.getFullURL(imageHelper.getThumbImage(data.image_url))}}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{data.name}</Text>
          </View>
          {imdbButton}
        </View>
        <View style={styles.separator} />
      </View>
    );
  },

  _goImdb: function() {
    var data = this.props.data;
    var imdb_code = data.imdb_code;

    var url1 = `http://m.imdb.com/name/${imdb_code}`;
    var url2 = `imdb:///name/${imdb_code}/`;

    var canOpenSafari = false;
    var canOpenImdbApp = false;

    if (Platform.OS === 'ios') {
      LinkingIOS.canOpenURL(url1, (supported) => {
        canOpenSafari = supported;
        if (canOpenSafari && canOpenImdbApp) {
          if (canOpenSafari) {
            LinkingIOS.openURL(url1);
          }
          else if (canOpenImdbApp) {
            LinkingIOS.openURL(url2);
          }
        }
      });
      LinkingIOS.canOpenURL(url2, (supported) => {
        canOpenImdbApp = supported;
        if (canOpenSafari && canOpenImdbApp) {
          if (canOpenSafari) {
            LinkingIOS.openURL(url1);
          }
          else if (canOpenImdbApp) {
            LinkingIOS.openURL(url2);
          }
        }
      });
    }
    else if (Platform.OS === 'android') {
      WebIntent.open(url1);
    }
  }
});