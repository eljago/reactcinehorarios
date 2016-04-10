'use strict'

import React, { StyleSheet, View } from 'react-native';

import renderRelayScene from './RenderRelayScene'
import renderNormalScene from './RenderNormalScene'

export default function renderScene(route, navigator) {
	if (route.queryConfig !== undefined){
		var scene = renderRelayScene(route, navigator);
	}
	else {
		var scene = renderNormalScene(route, navigator);
	}

	return (
    <View style={styles.container}>
    	{scene}
    </View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 64
  }
});