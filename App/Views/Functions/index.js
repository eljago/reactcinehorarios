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

// Views
var ShowView = require('../Show');
//Components
var RefreshableListView = require('react-native-refreshable-listview');
var ShowFunctionsCell = require('./Elements/ShowFunctionsCell');
// Utils
var api = require('../../Utils/api');
// Styles
var styles = require('./style');

var Functions = React.createClass({

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
      <RefreshableListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        loadData={this._fetchData}
        refreshDescription="Descargando ..."/>
    );
  },

  _renderRow: function(rowData, sectionID, rowID) {
    return (
      <ShowFunctionsCell data={rowData} rowID={rowID} onPress={this._pressRow} api={api}/>
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
    api.getFunctions(this.props.extraData.theaterData.id, date).then(json => {
      this._handleResponse(json);
    }).catch(error => {

    });
  },

  _handleResponse: function(json) {
    if (json.shows && json.shows.length > 0) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(json.shows),
      });
    }
    else {

    }
  }
});

module.exports = Functions;
