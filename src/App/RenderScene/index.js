'use strict'

import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import {colors} from '../../Data';
import renderRelayScene from './RenderRelayScene';
import renderNormalScene from './RenderNormalScene';

export default function renderScene(route, navigator, props = null) {
	if (route.queryConfig !== undefined){
		var scene = renderRelayScene(route, navigator, props);
	}
	else {
		var scene = renderNormalScene(route, navigator, props);
	}

	let marginTop = 0;
	if (!route.hideNavBar) {
		if (Platform.OS === 'android') {
			marginTop = 56;
		}
		else if (Platform.OS === 'ios') {
			marginTop = 64;
		}
	}
	else {
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
    backgroundColor: colors.background
  }
});