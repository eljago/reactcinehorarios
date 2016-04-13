'use strict';

import { ViewerQueryConfig } from './queryConfigs';

import Cinemas from '../Views/Cinemas';
import Billboard from '../Views/Billboard';
import ComingSoon from '../Views/ComingSoon';
import Theaters from '../Views/Theaters';
import Functions from '../Views/Functions';

function getBaseRoutes() {
  return [
    getCinemasRoute(),
    getBillboardRoute(),
    getComingSoonRoute()
  ];
};

export {
  getBaseRoutes,
  getCinemasRoute,
  getFunctionsRoute,
  getTheatersRoute
};

function getCinemasRoute() {
  return({
    title: 'Cinemas',
    Component: Cinemas
  });
};

function getBillboardRoute() {
  return({
    title: 'Cartelera',
    Component: Billboard,
    queryConfig: new ViewerQueryConfig()
  });
};

function getComingSoonRoute() {
  return({
    title: 'Próximamente',
    Component: ComingSoon,
    queryConfig: new ViewerQueryConfig()
  });
};

function getTheatersRoute(cinema_id, cinemaName) {
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

function getFunctionsRoute(formattedDate, theater_id) {
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