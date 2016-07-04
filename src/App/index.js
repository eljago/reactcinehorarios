'use strict';

import React from 'react';
import {Navigator, StyleSheet} from 'react-native';

import renderScene from './renderScene';
import MainTabBarRoute from '../routes/TabBarRoutes/MainTabBarRoute';

export default class App extends React.Component {
	render() {
		return renderScene(new MainTabBarRoute())
	}
}
