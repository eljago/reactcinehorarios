'use strict';

var React = require('react-native');

var {
  View,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Text,
  Platform
} = React;

import { Colors, Routes } from '../Data';

var Menu = React.createClass({
  contextTypes: {
    menuActions: React.PropTypes.object
  },

  getInitialState: function() {
    let routes = [Routes.Cinemas];
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: dataSource.cloneWithRows(routes)
    };
  },

  render: function() {
    var paddingTop = 58;
    if (Platform === 'ios') {
      paddingTop = 44;
    }
    else if (Platform === 'android') {
      paddingTop = 58
    }
    return (
      <View style={[styles.container, {paddingTop: paddingTop}]}>
        <ListView
         style={styles.listView}
         dataSource={this.state.dataSource}
         renderRow={this._renderRow}
         scrollsToTop={false}
        />
      </View>
    );
  },

  _renderRow: function(rowData, sectionID, rowID) {
    var rowContainer = null;
    if (Platform.OS === 'ios') {
      rowContainer =
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}/>
          <View style={styles.textContainer}>
            <Text style={styles.name}>
              {rowData.title}
            </Text>
          </View>
        </View>
    }
    else if(Platform.OS === 'android') {
      rowContainer =
        <View style={styles.rowContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>
              {rowData.title}
            </Text>
          </View>
          <View style={{flex: 1}}/>
        </View>
    }
      
    return(
      <TouchableHighlight
        underlayColor={Colors.concrete}
        onPress={() => this._pressRow(rowData)}>
        {rowContainer}
      </TouchableHighlight>
    );

  },

  _pressRow: function(routeData) {
    helper.closeMenu();
    helper.getNavigator().resetTo(routeData);
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: Colors.midnightBlue,
  },
  listView: {
    flex: 1,
    backgroundColor: Colors.midnightblue,
  },

  // ROW STYLES
  rowContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  textContainer: {
    padding: 10,
    flex: 2
  },
  name: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    flex: 1
  },
});

module.exports = Menu;