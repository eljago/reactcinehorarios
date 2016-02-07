'use strict';

import React, { View, Platform, StyleSheet, PropTypes, Text } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Functions from '../../containers/functions.container';
import dateFunctions from '../../Utils/dateFunctions';

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
            renderIcon={() => getIcon(weekDates[0])}
            renderSelectedIcon={() => getIcon(weekDates[0], true)}
            onPress={ () => this.setState({ selectedTab: 'tab1' }) }>
              <Functions
                navigator={this.props.navigator}
                theaterData={this.props.theaterData}
                date={weekDates[0]}
              />
          </TabNavigator.Item>
      
          <TabNavigator.Item
            selected={ this.state.selectedTab === 'tab2' }
            renderIcon={() => getIcon(weekDates[1])}
            renderSelectedIcon={() => getIcon(weekDates[1], true)}
            onPress={ () => this.setState({ selectedTab: 'tab2' }) }>
              <Functions
                navigator={this.props.navigator}
                theaterData={this.props.theaterData}
                date={weekDates[1]}
              />
          </TabNavigator.Item>
      
          <TabNavigator.Item
            selected={ this.state.selectedTab === 'tab3' }
            renderIcon={() => getIcon(weekDates[2])}
            renderSelectedIcon={() => getIcon(weekDates[2], true)}
            onPress={ () => this.setState({ selectedTab: 'tab3' }) }>
              <Functions
                navigator={this.props.navigator}
                theaterData={this.props.theaterData}
                date={weekDates[2]}
              />
          </TabNavigator.Item>
      
          <TabNavigator.Item
            selected={ this.state.selectedTab === 'tab4' }
            renderIcon={() => getIcon(weekDates[3])}
            renderSelectedIcon={() => getIcon(weekDates[3], true)}
            onPress={ () => this.setState({ selectedTab: 'tab4' }) }>
              <Functions
                navigator={this.props.navigator}
                theaterData={this.props.theaterData}
                date={weekDates[3]}
              />
          </TabNavigator.Item>
      
          <TabNavigator.Item
            selected={ this.state.selectedTab === 'tab5' }
            renderIcon={() => getIcon(weekDates[4])}
            renderSelectedIcon={() => getIcon(weekDates[4], true)}
            onPress={ () => this.setState({ selectedTab: 'tab5' }) }>
              <Functions
                navigator={this.props.navigator}
                theaterData={this.props.theaterData}
                date={weekDates[4]}
              />
          </TabNavigator.Item>
      
          <TabNavigator.Item
            selected={ this.state.selectedTab === 'tab6' }
            renderIcon={() => getIcon(weekDates[5])}
            renderSelectedIcon={() => getIcon(weekDates[5], true)}
            onPress={ () => this.setState({ selectedTab: 'tab6' }) }>
              <Functions
                navigator={this.props.navigator}
                theaterData={this.props.theaterData}
                date={weekDates[5]}
              />
          </TabNavigator.Item>
      
          <TabNavigator.Item
            selected={ this.state.selectedTab === 'tab7' }
            renderIcon={() => getIcon(weekDates[6])}
            renderSelectedIcon={() => getIcon(weekDates[6], true)}
            onPress={ () => this.setState({ selectedTab: 'tab7' }) }>
              <Functions
                navigator={this.props.navigator}
                theaterData={this.props.theaterData}
                date={weekDates[6]}
              />
          </TabNavigator.Item>

        </TabNavigator>
      </View>
    );
  }
}

let getIcon = (weekDate, selected = false) => {
  let styleToUse = selected ? styles.selectedIcon : styles.icon;
  return(
    <View style={styles.iconView}>
      <Text style={styleToUse}>{weekDate.getDate()}</Text>
      <Text style={styleToUse}>{dateFunctions.getDateString(weekDate)}</Text>
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    color: 'gray'
  },
  selectedIcon: {
    color: colors.navBar
  },
  iconView: {
    top: 8,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
});
