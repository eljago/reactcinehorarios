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

var api = global.api;
var ShowView = require('../Show');
var BillboardCell = require('./Elements/BillboardCell');

var styles = require('./style');

var BillboardPage = React.createClass({

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
      <BillboardCell data={rowData} api={api} onPress={this._pressRow}/>
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
    api.getBillboard().then(json => {
      this._handleResponse(json);
    }).catch(error => {

    });
  },

  _handleResponse: function(json) {
    if (json.billboard && json.billboard.length > 0) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(json.billboard),
      });
    }
    else {

    }
  }
});

module.exports = BillboardPage;
