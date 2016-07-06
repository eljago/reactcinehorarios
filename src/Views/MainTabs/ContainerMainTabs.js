'use strict';

import React, {PropTypes} from 'react';

import ComponentMainTabs from './ComponentMainTabs';

export default class ContainerMainTabBar extends React.Component {
  
  static propTypes = {
    tabBarRoutes: PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.tabBarRoutes[0].title
    }
  }

  render() {
    return (
      <ComponentMainTabs
        tabBarRoutes={this.props.tabBarRoutes}
        selectedTab={this.state.selectedTab}
        onPressTabBarItem={this._onPressTabBarItem.bind(this)}
        navigator={this.props.navigator}
      />
    );
  }

  _onPressTabBarItem(route) {
    this.setState({
      selectedTab: route.title
    });
  }
}