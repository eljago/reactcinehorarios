'use strict';

import { ViewerQueryConfig } from './queryConfigs';

import Cinemas from '../Views/Cinemas';
import Billboard from '../Views/Billboard';
import ComingSoon from '../Views/ComingSoon';
import Theaters from '../Views/Theaters';
import Functions from '../Views/Functions';
import Show from '../Views/Show';
import PhotoGallery from '../Views/PhotoGallery';
import Videos from '../Views/Videos';
import VideosWebView from '../Views/VideosWebView';
import ShowCast from '../Views/ShowCast';

function getBaseRoutes() {
  return [
    getCinemasRoute(),
    getBillboardRoute(),
    getComingSoonRoute(),
    getVideosRoute()
  ];
};

export {
  getBaseRoutes,
  getCinemasRoute,
  getFunctionsRoute,
  getTheatersRoute,
  getShowRoute,
  getPhotoGalleryRoute,
  getVideosRoute,
  getVideosWebView,
  getShowCastRoute
};

function getCinemasRoute() {
  return({
    title: 'Cinemas',
    Component: Cinemas,
    icon: require('../../assets/Cinemas.png'),
    navigator: true
  });
};

function getBillboardRoute() {
  return({
    title: 'Cartelera',
    Component: Billboard,
    queryConfig: new ViewerQueryConfig(),
    icon: require('../../assets/Billboard.png')
  });
};

function getComingSoonRoute() {
  return({
    title: 'Próximamente',
    Component: ComingSoon,
    queryConfig: new ViewerQueryConfig(),
    icon: require('../../assets/ComingSoon.png')
  });
};

function getVideosRoute() {
  return({
    title: 'Videos',
    Component: Videos,
    queryConfig: new ViewerQueryConfig(),
    icon: require('../../assets/Videos.png'),
    navigator: true
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
    },
    hideNavBar: true
  });
};

function getPhotoGalleryRoute(images) {
  return({
    title: "",
    Component: PhotoGallery,
    extraData: {
      images: images
    }
  });
};

function getVideosWebView() {
  return({
    title: "",
    Component: VideosWebView
  });
};

function getShowCastRoute(cast) {
  return({
    title: 'Elenco',
    Component: ShowCast,
    extraData: {
      cast: cast
    },
    hideNavBar: true
  });
}

