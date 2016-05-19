'use strict'

import React, { PropTypes } from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';

export class MenuButton extends React.Component {

  static propTypes = {
    onPress: PropTypes.func
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={this.props.onPress}>
          <Image 
            source={require('../../../assets/MenuIcon.png')} 
            style={styles.icon} 
            resizeMode='contain'/>
        </TouchableHighlight>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    width: 44,
    height: 44,
    marginRight: 10,
    marginLeft: 10
  },
});