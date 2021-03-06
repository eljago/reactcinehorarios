'use strict'

import React from 'react'
import {
  Platform,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native'

import {colors} from '../Data'

export default class LoadingIndicator extends React.Component {

  render() {
    return(
      <View style={styles.loadingContainer}>
        <View style={styles.activityContainer}>
          <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            color='white'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityContainer: {
    padding: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(1,1,1,0.5)'
  },
  activityIndicator: {
    width: 36,
    height: 36
  }
})