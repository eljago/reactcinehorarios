'use strict';

var React = require('react-native');
var {
  Image,
  Text,
  View,
  Platform
} = React;

var ScrollableTabView = require('react-native-scrollable-tab-view');
var CustomTabBar = require('./Elements/CustomTabBar');

var styles = require('./style');
var Day = require('./Elements/Day');
var colors = global.colors;

var loadedTabs = null;

var requires = {
  api: require('../../Utils/api'),
  showView: require('../Show'),
  imageHelper: require('../../Utils/ImageHelper'),
  rightAccesoryView: require('../../Images/RightAccesoryView.png')
}

var getDateString = function(date) {
  var weekDayNumber = date.getDay();
  var weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  return `${weekDays[weekDayNumber]} ${date.getDate()}`;
};

module.exports = React.createClass({

  componentDidMount: function() {
    this.refs.tab1.fetchData();
    loadedTabs = [true, false, false, false, false, false, false];;
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
          {this._getDayComponent(date1, 'tab1')}
          {this._getDayComponent(date2, 'tab2')}
          {this._getDayComponent(date3, 'tab3')}
          {this._getDayComponent(date4, 'tab4')}
          {this._getDayComponent(date5, 'tab5')}
          {this._getDayComponent(date6, 'tab6')}
          {this._getDayComponent(date7, 'tab7')}
        </ScrollableTabView>
      </View>
    );
  },

  _onChangeTab: function(obj) {
    console.log('changed to tab ' + obj.i);
    if (!loadedTabs[obj.i]) {
      console.log('fetching data of tab ' + obj.i);
      this._getTabAtIndex(obj.i).fetchData();
      loadedTabs[obj.i] = true;
    }
  },

  _getTabAtIndex: function(index) {
    return this.refs[`tab${index+1}`];
  },

  _getDayComponent: function(date, ref) {
    return(
      <Day
        ref={ref}
        tabLabel={getDateString(date)} 
        navigator={this.props.navigator}
        theaterData={this.props.extraData.theaterData}
        date={date}
        requires={requires}/>
    );
  }
});