'use strict';

var React = require('react-native');
var {
  Image,
  ScrollView,
  TouchableHighlight,
  ListView,
  Text
} = React;

var TheatersView = require('../Theaters');
var styles = require('./style');
var CinemaCell = require('./Elements/CinemaCell');

module.exports = React.createClass({

  getInitialState: function() {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var cinemasArray = require('../../Data/cinemas');
    return {
      dataSource: dataSource.cloneWithRows(cinemasArray),
    };
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
    return <CinemaCell
            data={rowData}
            rowID={rowID} 
            onPress={this._pressRow}/>;
  },

  _pressRow: function(rowData) {
    this.props.navigator.push({
      title: rowData.name,
      component: TheatersView,
      extraData: {cinemaData: rowData}
    });
  }

});
