'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Platform
} = React;

var colors = require('../../Data/colors');

module.exports = StyleSheet.create({
  
	container: {
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 20 : 12
	},
	tabBarStyle: {
		height: 42,
		overflow: 'hidden'
	},
	sceneStyle: {
		paddingBottom: 42
	},
	icon: {
		color: 'gray',
		backgroundColor: 'transparent'
	},
	selectedIcon: {
		color: colors.navBar
	}
});
