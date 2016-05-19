'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, TouchableHighlight, Image } from 'react-native';

export default class ComponentRightButton extends React.Component {

  static propTypes = {
  	onPress: PropTypes.func,
    source: PropTypes.number,
    color: PropTypes.string
  };

  render() {
    return (
      <TouchableHighlight
        style={styles.bottomViewButton}
        onPress={this.props.onPress}
      >
        <Image
          style={[styles.bottomViewIcon, {tintColor: this.props.color}]}
          source={this.props.source}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  bottomViewButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomViewIcon: {
    width: 25,
    height: 25
  },
});