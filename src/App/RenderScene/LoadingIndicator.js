'use strict';

import React from 'react';
import {
  Platform,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

export default class LoadingIndicator extends React.Component {

  render() {
    return(
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color='black'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityIndicator: {
    width: 36,
    height: 36
  }
});