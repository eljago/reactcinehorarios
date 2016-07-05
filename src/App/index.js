'use strict';

import React from 'react';
import {Navigator, StyleSheet} from 'react-native';

import TabBarRoute from '../routes/TabBarRoute';
import NavigatorRoute from '../routes/NavigatorRoute';
import SimpleRoute from '../routes/SimpleRoute';

import Cinemas from '../Views/Cinemas';
import Billboard from '../Views/Billboard';

export default class App extends React.Component {
	render() {
		const tabBarRoute = new TabBarRoute({
			tabBarRoutes:
			[
				new NavigatorRoute({
					title: 'Cinemas',
					tabBarIcon: require('../../assets/Cinemas.png'),
					initialRoute: new SimpleRoute({
						title: 'Cinemas',
						component: Cinemas
					})
				}),
				new SimpleRoute({
					title: 'Cartelera',
					component: Billboard,
					tabBarIcon: require('../../assets/Billboard.png'),
				})
			]
		});
		return tabBarRoute.renderScene();
	}
}

