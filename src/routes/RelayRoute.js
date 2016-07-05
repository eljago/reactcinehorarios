'use strict';

import React from 'react';
import Relay from 'react-relay';
import { Text, TouchableHighlight, View } from 'react-native';

import SimpleRoute from './SimpleRoute';
import ViewerQueryConfig from './queryConfigs';

import LoadingIndicator from '../App/RenderScene/LoadingIndicator';

export default class RelayRoute extends SimpleRoute {

  renderScene(navigator = null) {
    const Component = this.component;
    return(
      <Relay.RootContainer
        Component={Component}
        route={new ViewerQueryConfig()}
        forceFetch={false}
        onReadyStateChange={(currentReadyState) => {
          
        }}
        renderFetched={(data, readyState) => {
          return (
            <Component
              navigator={navigator}
              {...this.extraProps}
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
}