'use strict';

import { ViewerQueryConfig } from './queryConfigs';

import Cinemas from '../Views/Cinemas';
import Theaters from '../Views/Theaters';
import Functions from '../Views/Functions';

export function getCinemasRoute() {
	return({
    title: 'Cinemas',
    Component: Cinemas,
    queryConfig: new ViewerQueryConfig()
  });
};

export function getTheatersRoute(cinema_id, cinemaName) {
	return({
    title: 'Theaters',
    Component: Theaters,
    queryConfig: new ViewerQueryConfig(),
    extraData: {
      cinema_id: cinema_id,
      name: cinemaName
    }
  });
};

export function getFunctionsRoute(formattedDate, theater_id) {
  return({
    title: 'Functions',
    Component: Functions,
    queryConfig: new ViewerQueryConfig(),
    extraData: {
      theater_id: theater_id,
      date: formattedDate
    }
  });
};