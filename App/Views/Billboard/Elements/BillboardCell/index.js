'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  TouchableHighlight,
  View,
} = React;

var colors = global.colors;
var api = global.api;
var imageHelper = require('../../../../Utils/ImageHelper');
var styles = require('./style');

var BillboardCell = React.createClass({

  render: function() {
    var data = this.props.data;

    return(
      <TouchableHighlight
      underlayColor={colors.concrete}
      onPress={() => this.props.onPress(data)}>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.imageContainer}>
              <Image
              resizeMode='contain'
              style={styles.image}
              source={{uri: api.getFullURL(imageHelper.getThumbImage(data.image_url))}}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{data.name}</Text>
              <Text style={styles.genres}>{data.genres.split(", ").join('\n')}</Text>
            </View>
            <Image source={require('../../../../Images/RightAccesoryView.png')}/>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
});

module.exports = BillboardCell;
