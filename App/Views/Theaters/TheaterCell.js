'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} = React;

var colors = global.colors;

module.exports = React.createClass({

  render: function() {
    var data = this.props.data;
    var api = this.props.api;
    var cellBackgroundColor = this.props.rowID % 2 == 0 ? 'white' : colors.silver;

    return(
      <TouchableHighlight
      underlayColor={colors.concrete}
      onPress={() => this.props.onPress(data)}>
        <View style={[styles.rowContainer, {backgroundColor: cellBackgroundColor}]}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{data.name}</Text>
          </View>
          <Image 
            style={styles.rightAccessoryView} 
            source={require('../../Images/RightAccesoryView.png')}/>
        </View>
      </TouchableHighlight>
    );
  }
});


var styles = StyleSheet.create({

  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '300',
    color: '#000'
  },
  rightAccessoryView: {
    width: 22,
    height: 22,
  }
});