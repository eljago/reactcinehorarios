'use strict'

import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import renderRelayScene from './RenderRelayScene'
import renderNormalScene from './RenderNormalScene'

export default function renderScene(route, navigator) {
	if (route.queryConfig !== undefined){
		var scene = renderRelayScene(route, navigator);
	}
	else {
		var scene = renderNormalScene(route, navigator);
	}

	let marginTop = 64;
	if (Platform.OS === 'android') {
		marginTop = 56;
	}
	if (route.navigationBarHidden === true) {
		marginTop = 0;
	}
	return (
    <View style={[styles.container, {marginTop: marginTop}]}>
    	{scene}
    </View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});