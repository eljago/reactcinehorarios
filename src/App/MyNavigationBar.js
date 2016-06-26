'use strict'

import {Navigator} from 'react-native';

export default class MyNavigationBar extends Navigator.NavigationBar {

  render() {
    var routes = this.props.navState.routeStack;

    if (routes.length) {
      var route = routes[routes.length - 1];

      if (route.hideNavBar === true) {
        return null;
      }
    }

    return super.render();
  }
}