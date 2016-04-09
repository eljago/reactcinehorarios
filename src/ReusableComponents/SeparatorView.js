'use strict';

import React, { View, StyleSheet } from 'react-native'

export default class SeparatorView extends React.Component {

  render() {
    return (
      <View style={styles.separator} />
    );
  }
}

let styles = StyleSheet.create({

  separator: {
    height: 1,
    backgroundColor: '#ddd',
  }

});
