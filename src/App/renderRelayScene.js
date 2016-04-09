'use strict';

import React, { StyleSheet, View } from 'react-native';
import Relay from 'react-relay';

const NAV_BAR_HEIGHT = 64;

export default function relayRenderScene(route, navigator) {
  const { title, Component, queryConfig, extraData } = route;

  return (
    <View style={styles.container}>
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
            <View style={{flex: 1, backgroundColor: 'green'}}>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: NAV_BAR_HEIGHT
  },
});