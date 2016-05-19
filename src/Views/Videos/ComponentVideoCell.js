'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
  Text
} from 'react-native'

import { colors } from '../../Data';

export default class ComponentVideoCell extends React.Component {

  static propTypes = {
    videoName: PropTypes.string,
    videoPortraitImageUri: PropTypes.string,
    showName: PropTypes.string,
    showImageUri: PropTypes.string,
    onPress: PropTypes.func,
    onPressShow: PropTypes.func
  };
	static displayName = 'ComponentVideoCell';

	render() {
		return(
	    <View style={styles.rowContainer}>

	      <TouchableHighlight
          style={[styles.showContainer, styles.shadow]}
	        underlayColor={colors.concrete}
	        onPress={() => this.props.onPress() }>
	        <Image
		        style={styles.showImage}
            source={{uri: this.props.showImageUri}}
		       />
	      </TouchableHighlight>


	      <TouchableHighlight
          style={[styles.videoContainer, styles.shadow]}
	        underlayColor={colors.concrete}
	        onPress={() => this.props.onPressShow() }>
	        <Image
	          resizeMode='cover'
	          style={styles.portraitImage}
            source={{uri: this.props.videoPortraitImageUri}}
	        >
            <View style={styles.videoBackground}>
              <Image
                source={require('../../../assets/VIdeoPlay.png')}
              />
            </View>
          </Image>
	      </TouchableHighlight>

	    </View>
    );
  }
}



let styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF'
  },
  showContainer: {
  },
  videoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  shadow: {
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, height: 0
    },
    backgroundColor: 'gray'
  },
  showImage: {
    width: 80,
    height: 120,
  },
  portraitImage: {
    flex: 1,
    backgroundColor: 'black'
  },
  videoBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center'
  }
});
