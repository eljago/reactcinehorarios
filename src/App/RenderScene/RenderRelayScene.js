'use strict';

import React, { StyleSheet, View } from 'react-native';
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
            <React.Text>{error.message}</React.Text>
            <React.TouchableHighlight
              underlayColor={'red'}
              onPress={retry}>
              <React.Text>
                Retry?
              </React.Text>
            </React.TouchableHighlight>
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
