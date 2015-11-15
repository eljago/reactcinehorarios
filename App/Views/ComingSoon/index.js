'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component,
  ScrollView
} = React;

var api = require('../../Utils/api');
var ShowView = require('../Show');
var ComingSoonCell = require('./Elements/ComingSoonCell');
var styles = require('./style');

var ComingSoonPage = React.createClass({

  getInitialState: function() {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: dataSource
    };
  },

  componentDidMount: function() {
    this._fetchData();
  },

  render: function() {
    return (
      <ListView
       style={styles.container}
       dataSource={this.state.dataSource}
       renderRow={this._renderRow}/>
    );
  },

  _renderRow: function(rowData, sectionID, rowID) {
    return (
      <ComingSoonCell data={rowData} onPress={this._pressRow} api={api}/>
    );
  },

  _pressRow: function(data) {
    this.props.navigator.push({
      title: data.name,
      component: ShowView,
      extraData: {showData: data}
    });
  },

  _fetchData: function() {
    var date = new Date();
    api.getComingSoon().then(json => {
      this._handleResponse(json);
    }).catch(error => {

    });
  },

  _handleResponse: function(json) {
    if (json.coming_soon && json.coming_soon.length > 0) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(json.coming_soon),
      });
    }
    else {

    }
  }
});

module.exports = ComingSoonPage;
