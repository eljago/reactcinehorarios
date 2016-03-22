'use strict';

import { ViewerQueryConfig } from './queryConfigs';

import Cinemas from '../Cinemas';

export function getCinemasRoute() {
	return({
    title: 'Cinemas',
    // Cinemas is a Relay.Container
    Component: Cinemas,
    queryConfig: new ViewerQueryConfig()
  });
};

export function getTheatersRoute() {
	return({
    title: 'Theaters',
    // Cinemas is a Relay.Container
    Component: Theaters,
    queryConfig: new ViewerQueryConfig()
  });
};