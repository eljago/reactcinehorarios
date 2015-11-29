'use strict';

var React = require('react-native');
var {
  View,
  ListView,
} = React;

var RefreshableListView = require('react-native-refreshable-listview');
var ProgressHUD = require('react-native-progress-hud');

var ShowFunctionsCell = require('../ShowFunctionsCell');
var styles = require('./style');

var Functions = React.createClass({
  mixins: [ProgressHUD.Mixin],

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
      <ShowFunctionsCell 
        data={rowData}
        rowID={rowID}
        onPress={this._pressRow}
        api={this.props.api}
      />
    );
  },

  _pressRow: function(data) {
    this.props.navigator.push({
      title: data.name,
      component: this.props.show,
      extraData: {showData: data}
    });
  },

  _fetchData: function() {
    this.showProgressHUD();
    this.props.api.getFunctions(this.props.theaterData.id, this.props.date).then(json => {
      this._handleResponse(json);
      this.dismissProgressHUD();
    }).catch(error => {
      this.dismissProgressHUD();
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
