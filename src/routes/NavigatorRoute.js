'use strict';

import React from 'react';
import {Navigator} from 'react-native';

import SimpleRoute from './SimpleRoute';
import {configureScene, getMyNavigationBar} from '../App/NavigationHelpers';

export default class NavigatorRoute extends SimpleRoute {

	initialRoute = null;

	constructor(props) {
		super(props);
		this.initialRoute = props.initialRoute;
	}

	renderScene(navigator = null) {
		return(
      <Navigator
        initialRoute={this.initialRoute}
        renderScene={(route, nav) => {
        	nav.superNavigator = navigator;
        	return route.renderScene(nav);
        }}
        configureScene={configureScene}
        navigationBar={getMyNavigationBar()}
      />
		);
	}
}