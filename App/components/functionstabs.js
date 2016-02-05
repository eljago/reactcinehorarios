'use strict';

import React, { View, Platform, StyleSheet, PropTypes } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Functions from '../containers/functions.container';
import dateFunctions from '../Utils/dateFunctions';

export default class FunctionsTabs extends React.Component{

  static propTypes = {
    navigator: PropTypes.object,
    theaterData: PropTypes.object,
    dates: PropTypes.array
  };
  static displayName = "FunctionsTabs";

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tab1'
    };
  }

  render() {
    let weekDates = this.props.dates;

    return (
      <View style={styles.container}>
        <TabNavigator>

            <TabNavigator.Item
              selected={ this.state.selectedTab === 'tab1' }
              title={ dateFunctions.getDateString(weekDates[0]) }
              onPress={ () => this.setState({ selectedTab: 'tab1' }) }>
                <Functions
                  navigator={this.props.navigator}
                  theaterData={this.props.theaterData}
                  date={weekDates[0]}
                />
            </TabNavigator.Item>
        
            <TabNavigator.Item
              selected={ this.state.selectedTab === 'tab2' }
              title={ dateFunctions.getDateString(weekDates[1]) }
              onPress={ () => this.setState({ selectedTab: 'tab2' }) }>
                <Functions
                  navigator={this.props.navigator}
                  theaterData={this.props.theaterData}
                  date={weekDates[1]}
                />
            </TabNavigator.Item>

        </TabNavigator>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
