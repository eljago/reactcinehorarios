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

module.exports = React.createClass({

  render: function() {
    var data = this.props.data;
    var cellBackgroundColor = data.rowNumber % 2 == 0 ? 'white' : colors.silver;

    return(
      <TouchableHighlight
      underlayColor={colors.underlayColor}
      onPress={() => this.props.onPress(data) }>
        <View>
          <View style={[styles.rowContainer, {backgroundColor: cellBackgroundColor}]}>
            <View style={styles.textContainer}>
              <Text style={styles.name}>
                {data.name}
              </Text>
            </View>
            <Image style={styles.rightAccessoryView} source={require('../../../../../../Images/RightAccesoryView.png')}/>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
});