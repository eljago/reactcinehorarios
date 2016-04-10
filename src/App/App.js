'use strict';

import React, { Navigator } from 'react-native'
import Relay from 'react-relay'

import {QueryConfig} from '../routes/queryConfigs'
import Nav from './Nav'

export default class App extends React.Component {
	
  render() {
    return (
      <Relay.RootContainer
         Component={Nav}
         route={new QueryConfig()}
      />
    );
  }
}
