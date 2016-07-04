'use strict'

import React, {PropTypes} from 'react';
import {Image, StyleSheet, TouchableHighlight} from 'react-native'

export class NavButton extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    imageSource: PropTypes.number
  };

  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor="transparent"
      >
        <Image source={this.props.imageSource} style={styles.backButton} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    width: 44,
    height: 44,
    marginLeft: 10,
    marginRight: 10,
  },
});