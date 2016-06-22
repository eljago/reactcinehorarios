'use strict'

import React, { PropTypes } from 'react';
import {View, StyleSheet} from 'react-native';

import ComponentRightButton from './ComponentRightButton';
import ComponentShow from './ComponentShow';
import ComponentShowCast from '../ShowCast/ComponentShowCast';

import {colors} from '../../Data';

class TabBar extends React.Component {
  render() {return null;}
}

export default class ComponentShowTabs extends React.Component {

  static propTypes = {
    show: PropTypes.object.isRequired,
    onGoToImages: PropTypes.func,
    onGoToCast: PropTypes.func
  };

	render() {
		const {navigator, show} = this.props;

    return (
      <View style={styles.container}>
      	<ComponentShow
      		key={"Info"}
      		tabLabel={"Info"}
      		navigator={navigator}
	        show={show}
      	/>

        <View style={styles.menu}>
          <ComponentRightButton
            onPress={this.props.onGoToCast}
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
            onPress={() => {
              this.props.onGoToImages();
            }}
            source={require('../../../assets/IconImages.png')}
            color={'white'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  menu: {
    flexDirection: 'row',
    height: 49,
    backgroundColor: colors.tabBar
  },
});