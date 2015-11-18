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

var TabNavigator = require('react-native-tab-navigator');
var colors = require('../../Data/colors');
var Tab1 = require('./TabItems/Tab1');
var Tab2 = require('./TabItems/Tab2');
var Tab3 = require('./TabItems/Tab3');
var api = require('../../Utils/api');

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
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'tab1'}
          title="Home"
          renderIcon={() => <Image style={styles.tabIcon} source={require('./Images/MenuIcon.png')} />}
          onPress={() => this.setState({ selectedTab: 'tab1' })}>
          <Tab1
            api={api}
            ref='tab1'
            show={this.state.show}
            extraData={this.props.extraData}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'tab2'}
          title="Reparto"
          renderIcon={() => <Image style={styles.tabIcon} source={require('./Images/MenuIcon.png')} />}
          onPress={() => this.setState({ selectedTab: 'tab2' })}>
          <Tab2 
            api={api}
            ref='tab2'
            show={this.state.show}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'tab3'}
          title="Horarios"
          renderIcon={() => <Image style={styles.tabIcon} source={require('./Images/MenuIcon.png')} />}
          onPress={() => this.setState({ selectedTab: 'tab3' })}>
          <Tab3 
            api={api}
            ref='tab3'
            show={this.state.show}/>
        </TabNavigator.Item>
      </TabNavigator>
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

var styles = StyleSheet.create({
  tabIcon: {
    height: 30,
    width: 30,
  }
});
