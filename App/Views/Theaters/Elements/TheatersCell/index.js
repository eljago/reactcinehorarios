'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  TouchableHighlight,
  View,
} = React;

var styles = require('./style');
var colors = require('../../../../Data/colors');

var TheatersCell = React.createClass({

  render: function() {
    var data = this.props.data;
    var api = this.props.api;
    var cellBackgroundColor = this.props.rowID % 2 == 0 ? 'white' : colors.silver;

    return(
      <TouchableHighlight
      underlayColor={colors.concrete}
      onPress={() => this.props.onPress(data)}>
        <View>
          <View style={[styles.rowContainer, {backgroundColor: cellBackgroundColor}]}>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{data.name}</Text>
            </View>
            <Image 
              style={styles.rightAccessoryView} 
              source={require('image!theatersrightaccesoryview')}/>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
});

module.exports = TheatersCell;
