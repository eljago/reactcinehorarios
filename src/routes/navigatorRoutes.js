'use strict';

import { ViewerQueryConfig } from './queryConfigs';

import Cinemas from '../Views/Cinemas';
import Billboard from '../Views/Billboard';
import ComingSoon from '../Views/ComingSoon';
import Theaters from '../Views/Theaters';
import Functions from '../Views/Functions';
import Show from '../Views/Show';
import ShowImages from '../Views/Show/ComponentImages';
import Videos from '../Views/Videos';
import VideosWebView from '../Views/VideosWebView';

function getBaseRoutes() {
  return [
    getVideosRoute(),
    getBillboardRoute(),
    getCinemasRoute(),
    getComingSoonRoute()
  ];
};

export {
  getBaseRoutes,
  getCinemasRoute,
  getFunctionsRoute,
  getTheatersRoute,
  getShowRoute,
  getShowImagesRoute,
  getVideosRoute,
  getVideosWebView
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

function getVideosRoute() {
  return({
    title: 'Videos',
    Component: Videos,
    queryConfig: new ViewerQueryConfig()
  });
}

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

function getShowRoute(show_id) {
  return({
    title: "",
    Component: Show,
    queryConfig: new ViewerQueryConfig(),
    extraData: {
      show_id: show_id
    }
  });
};

function getShowImagesRoute(images) {
  return({
    title: "",
    Component: ShowImages,
    extraData: {
      images: images
    },
    navigationBarHidden: true,
    menuGesturesDisabled: true
  });
};

function getVideosWebView() {
  return({
    title: "",
    Component: VideosWebView
  });
}