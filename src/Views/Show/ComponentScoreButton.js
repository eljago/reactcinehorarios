'use strict';

import React, { PropTypes } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import {colors} from '../../Data';

export default class ComponentScoreButton extends React.Component {

  static propTypes = {
  	onPress: PropTypes.func,
    text: PropTypes.string,
    source: PropTypes.number
  };

  render() {
    return (
      <TouchableHighlight
        style={styles.scoreButton}
        underlayColor={colors.cellsUnderlayColor}
        onPress={this.props.onPress}>
        <View style={styles.scoreView}
      >
          <Image
            style={styles.scoreLogo}
            source={this.props.source}/>
          <Text style={styles.scoreText}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  scoreButton: {
    padding: 5
  },
  scoreView: {
    alignItems: 'center'
  },
  scoreLogo: {
    width: 32,
    height: 32,
    margin: 5
  },
  scoreText: {
    textAlign: 'center',
    fontSize: 13,
  },
});