'use strict'

import React from 'react'
import Relay from 'react-relay'
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native'

import SimpleRoute from './SimpleRoute'
import ViewerQueryConfig from './queryConfigs'

import LoadingIndicator from '../App/LoadingIndicator'

import {colors} from '../Data'

export default class RelayRoute extends SimpleRoute {

  constructor(props){
    super(props)
    this.relayParams = props.relayParams
  }
  
  renderScene(navigator = null) {
    const Component = this.component;
    return(
      <Relay.RootContainer
        Component={Component}
        route={new ViewerQueryConfig(this.relayParams)}
        forceFetch={false}
        onReadyStateChange={(currentReadyState) => {
          
        }}
        renderFetched={(data, readyState) => {
          return (
            <View style={styles.container}>
              <Component
                navigator={navigator}
                {...this.extraProps}
                {...data}
              />
            </View>
          )
        }}
        renderFailure={(error, retry) => {
          return (
            <View>
              <Text>{error.message}</Text>
              <TouchableHighlight
                underlayColor={'red'}
                onPress={retry}>
                <Text>
                  Retry?
                </Text>
              </TouchableHighlight>
            </View>
          )
        }}
        renderLoading={() => {
          return(
            <LoadingIndicator />
          )
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})