'use strict';

import React from 'react';
import {
  ActivityIndicatorIOS,
  Platform,
  ProgressBarAndroid,
  StyleSheet,
  View,
} from 'react-native';

export default class LoadingIndicator extends React.Component {

  render() {
    if (Platform.OS === 'android') {
      return (
        <View style={styles.loadingContainer}>
          <ProgressBarAndroid styleAttr="Large" color="black" />
        </View>
      );
    } else {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicatorIOS size="large" color='black' />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
});