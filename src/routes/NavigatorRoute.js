'use strict';

import React from 'react';
import {Navigator, View, StyleSheet, Platform} from 'react-native';

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
        	const scene = route.renderScene(nav);
    			let marginTop = 0;
					if (!route.hideNavBar) {
						if (Platform.OS === 'android') {
							marginTop = 56;
						}
						else if (Platform.OS === 'ios') {
							marginTop = 64;
						}
					}
        	return(
        		<View style={[styles.container, {marginTop: marginTop}]}>
        			{scene}
        		</View>
        	);
        }}
        configureScene={configureScene}
        navigationBar={getMyNavigationBar()}
      />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});