'use strict';

import React, { Navigator } from 'react-native'
import Relay from 'react-relay'

import codePush from "react-native-code-push";

import { CinemasRoute } from '../routes/navigatorRoutes'
import renderRelayScene from './renderRelayScene'
import containerCinemas from '../Cinemas/containerCinemas'
import {QueryConfig} from '../routes/queryConfigs'
import Nav from './Nav'

export default class App extends React.Component {

	componentDidMount() {
		codePush.sync();
	}
	
  render() {
    return (
      <Relay.RootContainer
         Component={Nav}
         route={new QueryConfig()}
      />
    );
  }
}