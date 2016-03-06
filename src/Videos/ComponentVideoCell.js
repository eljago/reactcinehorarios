'use strict';

import React, {
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
  Text,
  PropTypes
} from 'react-native'

import { colors } from '../Data'
import { Api, ImageHelper } from '../Utils'

export default class ComponentVideoCell extends React.Component {

  static propTypes = {
  	title: PropTypes.string,
  	subtitle: PropTypes.string,
  	image1: PropTypes.string,
  	image2: PropTypes.string,
  	rowID: PropTypes.string,
    onPress: PropTypes.func,
    onPressShow: PropTypes.func
  };
	static displayName = 'ComponentVideoCell';

	render() {
		return(
	    <View style={styles.rowContainer}>

	      <TouchableHighlight
	        underlayColor={colors.concrete}
	        onPress={() => this.props.onPress() }>
	        <Image
		        source={{uri: Api.getFullURL(ImageHelper.getThumbImage(this.props.image1))}}
		        style={styles.showImage}
		       />
	      </TouchableHighlight>


	      <TouchableHighlight
	        underlayColor={colors.concrete}
	        onPress={() => this.props.onPressShow() }>
	        <Image
	          resizeMode='cover'
	          style={styles.portraitImage}
	          source={{uri: Api.getFullURL(ImageHelper.getThumbImage(this.props.image2))}}
	         />
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
  showImage: {
    flex: 2,
    width: 80,
    height: 120,
    marginRight: 10
  },
  portraitImage: {
    flex: 1,
    width: 200,
    height: 120,
    backgroundColor: 'black'
  }
});
