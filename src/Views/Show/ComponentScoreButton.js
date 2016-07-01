'use strict';

import React, { PropTypes } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';

export default class ComponentScoreButton extends React.Component {

  static propTypes = {
    text: PropTypes.string,
    source: PropTypes.number
  };

  render() {
    return (
      <TouchableHighlight
        style={styles.scoreButton}
        underlayColor={'transparent'}
        onPress={() => {
          
        }}>
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
    padding: 2
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