'use strict'

import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {colors} from '../../Data';

export default class ComponentTabBar extends React.Component {

  static propTypes = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
  };

  render() {
    return (
      <View>
        <View style={[styles.tabs, this.props.style, ]}>
          {this.props.tabs.map((tab, i) => {
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => this.props.goToPage(i)}
                style={styles.tab}
              >
                <Text style={{
                  color: this.props.activeTab == i ? colors.tabBarActive : colors.tabBarInactive
                }}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 25,
    backgroundColor: colors.navBar,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});