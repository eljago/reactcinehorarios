'use strict';

var React = require('react-native');
var {
  Image,
  Text
} = React;

var TabNavigator = require('react-native-tab-navigator');
var styles = require('./style');
var Day = require('./Elements/Day');
var api = require('../../Utils/api');
var ShowView = require('../Show');

var getDateString = function(date) {
  var weekDayNumber = date.getDay();
  var weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  return `${weekDays[weekDayNumber]} ${date.getDate()}`;
};

module.exports = React.createClass({


  getInitialState: function() {
    return {
      selectedTab: 'tab1',
      show: null
    };
  },

  render: function() {
    var date1 = new Date();
    var date2 = new Date();
    var date3 = new Date();
    var date4 = new Date();
    var date5 = new Date();
    var date6 = new Date();
    var date7 = new Date();
    date2.setDate(date1.getDate()+1);
    date3.setDate(date1.getDate()+2);
    date4.setDate(date1.getDate()+3);
    date5.setDate(date1.getDate()+4);
    date6.setDate(date1.getDate()+5);
    date7.setDate(date1.getDate()+6);
    return (
      <TabNavigator
        style={styles.container}
        tabBarStyle={{ height: 42, overflow: 'hidden' }}
        sceneStyle={{ paddingBottom: 42 }}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'tab1'}
          renderIcon={() => <Text style={styles.icon}>{getDateString(date1)}</Text>}
          renderSelectedIcon={() => <Text style={styles.selectedIcon}>{getDateString(date1)}</Text>}
          onPress={() => this.setState({ selectedTab: 'tab1' })}>
          <Day
            navigator={this.props.navigator}
            theaterData={this.props.extraData.theaterData}
            date={date1}
            api={api}
            ref='tab1'
            show={ShowView}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'tab2'}
          renderIcon={() => <Text style={styles.icon}>{getDateString(date2)}</Text>}
          renderSelectedIcon={() => <Text style={styles.selectedIcon}>{getDateString(date2)}</Text>}
          onPress={() => this.setState({ selectedTab: 'tab2' })}>
          <Day 
            navigator={this.props.navigator}
            theaterData={this.props.extraData.theaterData}
            date={date2}
            api={api}
            ref='tab2'
            show={ShowView}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'tab4'}
          renderIcon={() => <Text style={styles.icon}>{getDateString(date3)}</Text>}
          renderSelectedIcon={() => <Text style={styles.selectedIcon}>{getDateString(date3)}</Text>}
          onPress={() => this.setState({ selectedTab: 'tab4' })}>
          <Day 
            navigator={this.props.navigator}
            theaterData={this.props.extraData.theaterData}
            date={date3}
            api={api}
            ref='tab4'
            show={ShowView}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'tab5'}
          renderIcon={() => <Text style={styles.icon}>{getDateString(date4)}</Text>}
          renderSelectedIcon={() => <Text style={styles.selectedIcon}>{getDateString(date4)}</Text>}
          onPress={() => this.setState({ selectedTab: 'tab5' })}>
          <Day 
            navigator={this.props.navigator}
            theaterData={this.props.extraData.theaterData}
            date={date4}
            api={api}
            ref='tab5'
            show={ShowView}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'tab6'}
          renderIcon={() => <Text style={styles.icon}>{getDateString(date5)}</Text>}
          renderSelectedIcon={() => <Text style={styles.selectedIcon}>{getDateString(date5)}</Text>}
          onPress={() => this.setState({ selectedTab: 'tab6' })}>
          <Day 
            navigator={this.props.navigator}
            theaterData={this.props.extraData.theaterData}
            date={date5}
            api={api}
            ref='tab6'
            show={ShowView}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'tab7'}
          renderIcon={() => <Text style={styles.icon}>{getDateString(date6)}</Text>}
          renderSelectedIcon={() => <Text style={styles.selectedIcon}>{getDateString(date6)}</Text>}
          onPress={() => this.setState({ selectedTab: 'tab7' })}>
          <Day 
            navigator={this.props.navigator}
            theaterData={this.props.extraData.theaterData}
            date={date6}
            api={api}
            ref='tab7'
            show={ShowView}/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  },
});