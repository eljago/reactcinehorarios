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
var ProgressHUD = require('react-native-progress-hud');

var FunctionsView = require('../Functions');
var api = require('../../Utils/api');
var TheatersCell = require('./Elements/TheatersCell');
var styles = require('./style');
var Favorites = require('../../Utils/Favorites');

module.exports = React.createClass({
  mixins: [ProgressHUD.Mixin],

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
      <View style={styles.container}>
        <RefreshableListView
          style={{flex: 1}}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          loadData={this._fetchData}
          refreshDescription="Descargando ..."
        />
        <ProgressHUD
          isVisible={this.state.is_hud_visible}
          isDismissible={true}
          overlayColor="rgba(0, 0, 0, 0.11)"
        />
      </View>
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
    this.showProgressHUD();
    api.getTheaters(COUNTRYNAME).then(json => {
      this._handleResponse(json);
      this.dismissProgressHUD();
    }).catch(error => {
      this.dismissProgressHUD();
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
