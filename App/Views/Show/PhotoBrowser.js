'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Image,
  ScrollView,
  ListView,
  Dimensions
} = React;


var PhotoBrowser = React.createClass({

  getInitialState: function() {
    return {
    };
  },

  render: function() {
    return(
      <View style={styles.container}/>
    );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },

});

module.exports = PhotoBrowser;
