'use strict';

var React = require('react-native');

var {
  View,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Text,
  Image,
  Platform
} = React;

var colors = global.colors;
var routesArray = require('../../Data/RoutesArray');
var helper = null;

var styles = require('./style');

var Menu = React.createClass({
  contextTypes: {
    menuActions: React.PropTypes.object
  },
  componentDidMount: function() {
    helper = this.props.helper;
  },

  getInitialState: function() {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: dataSource.cloneWithRows(routesArray)
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
        underlayColor={colors.concrete}
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

module.exports = Menu;
