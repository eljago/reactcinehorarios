'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Platform
} = React;


var GiftedListView = require('react-native-gifted-listview');

var FunctionsView = require('../Functions');
var TheaterCell = require('./TheaterCell');
var Favorites = require('../../Utils/Favorites');

const COUNTRYNAME = 'Chile';
var api = global.api;

module.exports = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <GiftedListView
          rowView={this._renderRow}
          onFetch={this._onFetch}
          firstLoader={true} // display a loader for the first fetching
          pagination={false} // enable infinite scrolling using touch to load more
          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          withSections={false} // enable sections

          refreshableFetchingView={this._renderRefreshableFetchingView}
          renderSeparator={this._renderSeparatorView}
          emptyView={this._renderEmptyView}

          PullToRefreshViewAndroidProps={{
            colors: ['white'],
            progressBackgroundColor: colors.navBar
          }}
        />
      </View>
    );
  },

  _renderRow: function(rowData, sectionID, rowID) {
    return (
      <TheaterCell data={rowData} rowID={rowID} onPress={this._pressRow}/>
    );
  },

  _renderRefreshableFetchingView() {
    return (
      <View style={styles.refreshableView}>
        <GiftedSpinner />
      </View>
    );
  },

  _renderSeparatorView() {
    return (
      <View style={styles.separator} />
    );
  },

  _renderEmptyView(refreshCallback) {
    return (
      <View style={styles.defaultView}>
        <Text style={styles.defaultViewTitle}>
          No hay contenido para mostrar
        </Text>
        
        <TouchableHighlight 
          underlayColor='#c8c7cc'
          onPress={refreshCallback}>
          <Text>↻</Text>
        </TouchableHighlight>
      </View>
    );
  },

  _pressRow: function(rowData) {
    this.props.navigator.push({
      title: rowData.name,
      component: FunctionsView,
      extraData: {theaterData: rowData},
      routeName: 'Functions'
    });
    Favorites.add(rowData.id, rowData.name);
  },

  _onFetch(page = 1, callback, options) {
    api.getTheaters(COUNTRYNAME).then(json => {
      this._handleResponse(json, callback);
    }).catch(error => {
      callback();
    });
  },

  _handleResponse: function(json, callback) {
    if (json.theaters && json.theaters.length > 0) {
      let theaters = json.theaters.filter(theater => {
        if(theater.cinema_id == this.props.extraData.cinemaData.id) {
          return theater;
        }
      });
      callback(theaters);
    }
    else {
      callback();
    }
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 12
  },

  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },

  defaultView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  defaultViewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  
  refreshableView: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

