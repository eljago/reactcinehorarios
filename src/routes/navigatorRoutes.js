'use strict';

import { ViewerQueryConfig } from './queryConfigs';

import Cinemas from '../Views/Cinemas';
import Billboard from '../Views/Billboard';
import ComingSoon from '../Views/ComingSoon';
import Theaters from '../Views/Theaters';
import Functions from '../Views/Functions';
import Show from '../Views/Show';

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
  getTheatersRoute,
  getShowRoute
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
    title: cinemaName,
    Component: Theaters,
    queryConfig: new ViewerQueryConfig(),
    extraData: {
      cinema_id: cinema_id,
      name: cinemaName
    }
  });
};

function getFunctionsRoute(start_date, theater_id, theaterName) {
  return({
    title: theaterName,
    Component: Functions,
    queryConfig: new ViewerQueryConfig(),
    extraData: {
      theater_id: theater_id,
      start_date: start_date
    }
  });
};

function getShowRoute(show_id, showName) {
  return({
    title: showName,
    Component: Show,
    queryConfig: new ViewerQueryConfig(),
    extraData: {
      show_id: show_id,
      showName: showName
    }
  });
};