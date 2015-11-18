'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  TouchableHighlight,
  View,
} = React;

var styles = require('./style');
var colors = require('../../../../../../Data/colors');
var imageHelper = require('../../../../../../Utils/ImageHelper');

module.exports = React.createClass({

  render: function() {
    var data = this.props.data;
    var api = this.props.api;

    return(
      <TouchableHighlight
      underlayColor={colors.concrete}
      onPress={() => this.props.onPress(data)}>
        <View>
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
            <Image 
            style={styles.rightAccessoryView} 
            source={require('../../../../../../Images/RightAccesoryView.png')}/>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
});