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
import colors from '../Data/colors';

var getDateString = function(date) {
  var weekDayNumber = date.getDay();
  var weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  return `${weekDays[weekDayNumber]} ${date.getDate()}`;
};

export default class FunctionsContainer extends React.Component{

  render() {
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
              tabBarBackgroundColor={colors.tabBar}
              tabBarActiveTextColor='white'
              tabBarInactiveTextColor={colors.tabBarInactive}/>}>
          {this._getDayComponent(date1, 'tab1')}
          {this._getDayComponent(date2, 'tab2')}
          {this._getDayComponent(date3, 'tab3')}
          {this._getDayComponent(date4, 'tab4')}
          {this._getDayComponent(date5, 'tab5')}
          {this._getDayComponent(date6, 'tab6')}
          {this._getDayComponent(date7, 'tab7')}
        </ScrollableTabView>

        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Image source={...} />}
            renderSelectedIcon={() => <Image source={...} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            {this._getDayComponent(date1, 'tab1')}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            renderIcon={() => <Image source={...} />}
            renderSelectedIcon={() => <Image source={...} />}
            renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            {this._getDayComponent(date2, 'tab2')}
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }

  _getDayComponent(date, ref) {
    return(
      <Day
        ref={ref}
        tabLabel={getDateString(date)} 
        navigator={this.props.navigator}
        theaterData={this.props.extraData.theaterData}
        date={date}
      />
    );
  }
}