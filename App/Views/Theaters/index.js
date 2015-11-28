'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

const COUNTRYNAME = 'Chile';

var RefreshableListView = require('react-native-refreshable-listview');
var FunctionsView = require('../Functions');
var api = require('../../Utils/api');
var TheatersCell = require('./Elements/TheatersCell');
var styles = require('./style');
var Favorites = require('../../Utils/Favorites');

module.exports = React.createClass({

  componentDidMount: function() {
    this._fetchData();
  },

  getInitialState: function() {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: dataSource
    };
  },

  render: function() {
    return (
      <RefreshableListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        loadData={this._fetchData}
        refreshDescription="Descargando ..."
      />
    );
  },

  _renderRow: function(rowData, sectionID, rowID) {
    return (
      <TheatersCell data={rowData} rowID={rowID} onPress={this._pressRow}/>
    );
  },

  _pressRow: function(rowData) {
    this.props.navigator.push({
      title: rowData.name,
      component: FunctionsView,
      extraData: {theaterData: rowData}
    });
    Favorites.add(rowData.id, rowData.name);
  },

  _fetchData: function() {
    api.getTheaters(COUNTRYNAME).then(json => {
      this._handleResponse(json);
    }).catch(error => {

    });
  },

  _handleResponse: function(json) {
    if (json.theaters && json.theaters.length > 0) {
      var theaters = json.theaters.filter(theater => {
        if(theater.cinema_id == this.props.extraData.cinemaData.id) {
          return theater;
        }
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(theaters),
      });
    }
    else {

    }
  }

});
