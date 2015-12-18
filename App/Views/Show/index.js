'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Component,
  Image,
  TabBarIOS,
  View,
  Platform
} = React;

var ScrollableTabView = require('react-native-scrollable-tab-view');
var CustomTabBar = require('./Elements/CustomTabBar');

var api = global.api;

var Tab1 = require('./TabItems/Tab1');
var Tab2 = require('./TabItems/Tab2');
var Tab3 = require('./TabItems/Tab3');
var styles = require('./style');

module.exports = React.createClass({

  componentDidMount: function() {
    this._fetchData();
  },

  getInitialState: function() {
    return {
      selectedTab: 'tab1',
      show: null
    };
  },

  render: function() {
    return(
      <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 20 : 12}}>
        <ScrollableTabView
          locked={true}
          tabBarPosition='bottom'
          onChangeTab={this._onChangeTab}
          renderTabBar={() =>
            <CustomTabBar
              backgroundColor={colors.tabBar}
              activeTextColor='white'
              inactiveTextColor={colors.tabBarInactive}/>}>
          <Tab1
            ref='tab1'
            show={this.state.show}
            extraData={this.props.extraData}
            tabLabel='Info'/>
          <Tab2 
            ref='tab2'
            show={this.state.show}
            tabLabel='Elenco'/>
          <Tab3 
            ref='tab3'
            show={this.state.show}
            tabLabel='Horarios'/>
        </ScrollableTabView>
      </View>
    );
  },

  _fetchData: function() {
    api.getShow(this.props.extraData.showData.id).then(json => {
      this._handleResponse(json);
    }).catch(error => {

    });
  },

  _handleResponse: function(json) {
    this.setState({
      show: json
    });
  }
});

