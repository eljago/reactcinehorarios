'use strict';

import React from 'react';
import {Navigator, StyleSheet} from 'react-native';
import Relay from 'react-relay';
import config from '../config';

import TabBarRoute from '../routes/TabBarRoute';
import NavigatorRoute from '../routes/NavigatorRoute';
import SimpleRoute from '../routes/SimpleRoute';
import RelayRoute from '../routes/RelayRoute';

import Cinemas from '../Views/Cinemas';
import Billboard from '../Views/Billboard';
import ComingSoon from '../Views/ComingSoon';
import Videos from '../Views/Videos';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(`${config.URL}${config.graphqlPath}`, {
    headers: config.headers,
    fetchTimeout: 30000,
    retryDelays: [5000, 10000]
  })
);

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
				new RelayRoute({
					title: 'Cartelera',
					component: Billboard,
					tabBarIcon: require('../../assets/Billboard.png')
				}),
				new RelayRoute({
					title: 'Próximamente',
					component: ComingSoon,
					tabBarIcon: require('../../assets/ComingSoon.png')
				}),
				new NavigatorRoute({
					title: 'Videos',
					tabBarIcon: require('../../assets/Videos.png'),
					initialRoute: new RelayRoute({
						title: 'Videos',
						component: Videos
					})
				})
			]
		});
		return tabBarRoute.renderScene();
	}
}

