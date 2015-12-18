'use strict';

var React = require('react-native');
var {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} = React;

var deviceWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 0,
  },

  tabs: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc',
  },
});

var DefaultTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    tabBarBackgroundColor : React.PropTypes.string,
    tabBarActiveTextColor : React.PropTypes.string,
    tabBarInactiveTextColor : React.PropTypes.string,
  },

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;
    var tabBarActiveTextColor = this.props.tabBarActiveTextColor || "navy";
    var tabBarInactiveTextColor = this.props.tabBarInactiveTextColor || "black";
    return (
      <TouchableOpacity style={[styles.tab]} key={name} onPress={() => this.props.goToPage(page)}>
        <View>
          <Text style={{color: isTabActive ? tabBarActiveTextColor : tabBarInactiveTextColor,
            fontWeight: isTabActive ? 'bold' : 'normal'}}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  },

  render() {
    var numberOfTabs = this.props.tabs.length;

    var left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, deviceWidth / numberOfTabs]
    });

    return (
      <View style={[styles.tabs, {backgroundColor : this.props.tabBarBackgroundColor || null}]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    );
  },
});

module.exports = DefaultTabBar;