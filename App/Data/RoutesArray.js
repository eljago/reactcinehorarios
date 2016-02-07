'use strict';

var CinemasView = require('../Views/Cinemas');
var VideosView = require('../Views/Videos');
import BillboardContainer from '../containers/billboard.container';
var ComingSoonView = require('../Views/ComingSoon');
var MapView = require('../Views/Map');

module.exports = [
  {
    title: 'Cines',
    component: CinemasView,
    imageName: 'menuiconCinemas'
  },
  {
    title: 'Videos',
    component: VideosView,
    imageName: 'menuiconVideos'
  },
  {
    title: 'Cartelera',
    component: BillboardContainer,
    imageName: 'menuiconBillboard'
  },
  {
    title: 'Próximamente',
    component: ComingSoonView,
    imageName: 'menuiconComingSoon'
  },
  {
    title: 'Cines Cercanos',
    component: MapView,
    imageName: 'menuiconComingSoon'
  }
];