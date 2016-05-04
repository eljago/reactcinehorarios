'use strict';

import React, {Navigator} from 'react-native';

export default class NavigationBar extends Navigator.NavigationBar {
  render() {
    var routes = this.props.navState.routeStack;

    if (routes.length) {
      var route = routes[routes.length - 1];

      if (route.navigationBarHidden === true) {
        return null;
      }
    }

    return super.render();
  }
}