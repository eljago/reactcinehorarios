'use strict';

import React, { Navigator, Component } from 'react-native'
import Relay from 'react-relay'

import {getCinemasRoute} from '../routes/navigatorRoutes';
import renderRelayScene from './renderRelayScene'

export default class MyApp extends Component {
  render() {
    return (
      <Navigator
        ref={'nav'}
        initialRoute={getCinemasRoute()}
        renderScene={renderRelayScene}
      />
    );
  }

  getNavigator() {
  	return this.refs.nav;
  }
}