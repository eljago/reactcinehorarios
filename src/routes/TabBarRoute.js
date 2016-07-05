'use strict';

import React from 'react';
import SimpleRoute from './SimpleRoute';
import ContainerMainTabBar from '../Views/MainTabs/ContainerMainTabs';

export default class TabBarRoute extends SimpleRoute {

	tabBarRoutes = [];

  constructor(props) {
  	super(props);
  	this.tabBarRoutes = props.tabBarRoutes;
  }

  renderScene(navigator = null) {
  	return(
			<ContainerMainTabBar tabBarRoutes={this.tabBarRoutes}/>
  	);
  }
}