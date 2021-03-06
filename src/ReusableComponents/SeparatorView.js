'use strict';

import React from 'react';
import { View, StyleSheet } from 'react-native'

export default class SeparatorView extends React.Component {

  render() {
    return (
      <View style={styles.separator}/>
    );
  }
}

const styles = StyleSheet.create({

  separator: {
    height: 1,
    backgroundColor: '#C1C1C1'
  }

});
