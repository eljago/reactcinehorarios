'use strict'

import React from 'react';
import {Navigator} from 'react-native';

import ContainerMainTabBar from '../Views/MainTabs/ContainerMainTabs';

import {configureScene, getMyNavigationBar} from './NavigationHelpers';

export default function renderScene(route, navigator = null) {
	const {sceneType} = route;
	if (sceneType === 'nav') {
		return(
      <Navigator
        initialRoute={route.initialRoute}
        renderScene={renderScene}
        configureScene={configureScene}
        navigationBar={getMyNavigationBar()}
      />
		);
	}
	else if (sceneType === 'tabBar') {
		return(
			<ContainerMainTabBar tabBarRoutes={route.tabBarRoutes}/>
		);
	}
	else if (sceneType === 'navItem') {
		return route.renderScene(navigator);
	}
	else { // ???
		return route.renderScene();
	}
}