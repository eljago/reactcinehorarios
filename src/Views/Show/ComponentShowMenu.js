'use strict'

import React, {PropTypes} from 'react';
import {StyleSheet, View, Platform} from 'react-native';

import {colors} from '../../Data';
import ComponentRightButton from './ComponentRightButton';

export default class ComponentShowMenu extends React.Component {

	static propTypes = {
		onGoBack: PropTypes.func,
		onPressCast: PropTypes.func,
		onPressShowtimes: PropTypes.func,
		onPressVideos: PropTypes.func,
		onPressImages: PropTypes.func
	};

	render() {
		let ComponentGoBack = null;
		if (Platform.OS === 'ios') {
			ComponentGoBack = <ComponentRightButton
										      onPress={this.props.onGoBack}
										      source={require('../../../assets/MenuBackIcon.png')}
										      color={'white'}
										    />;
		}
		return(
		  <View style={styles.menu}>
			  {ComponentGoBack}
		    <ComponentRightButton
		      onPress={this.props.onPressCast}
		      source={require('../../../assets/IconActors.png')}
		      color={'#FFC956'}
		    />
		    <ComponentRightButton
		      onPress={() => {

		      }}
		      source={require('../../../assets/IconShowtimes.png')}
		      color={'#2B72E6'}
		    />
		    <ComponentRightButton
		      onPress={() => {
		        
		      }}
		      source={require('../../../assets/IconVideos.png')}
		      color={'#E10B14'}
		    />
		    <ComponentRightButton
		      onPress={this.props.onPressImages}
		      source={require('../../../assets/IconImages.png')}
		      color={'white'}
		    />
		  </View>
		);
	}
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    height: 49,
    backgroundColor: colors.tabBar
  }
});