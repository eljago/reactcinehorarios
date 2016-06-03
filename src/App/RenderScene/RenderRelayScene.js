'use strict';

import React from 'react';
import { Text, TouchableHighlight, StyleSheet, View } from 'react-native';
import Relay from 'react-relay';

import LoadingIndicator from './LoadingIndicator';


export default function renderRelayScene(route, navigator) {
  const { title, Component, queryConfig, extraData } = route;

  return (
    <Relay.RootContainer
      Component={Component}
      route={queryConfig}
      forceFetch={false}
      onReadyStateChange={(currentReadyState) => {
        
      }}
      renderFetched={(data, readyState) => {
        return (
          <Component
            navigator={navigator}
            name={title}
            extraData={extraData}
            {...data}
          />
        );
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
        );
      }}
      renderLoading={() => {
        return(
          <LoadingIndicator />
        );
      }}
    />
  );
}
