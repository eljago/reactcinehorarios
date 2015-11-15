'use strict';

var CinemasView = require('../Views/Cinemas');
var VideosView = require('../Views/Videos');
var BillboardView = require('../Views/Billboard');
var ComingSoonView = require('../Views/ComingSoon');

var RoutesArray = [
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
    component: BillboardView,
    imageName: 'menuiconBillboard'
  },
  {
    title: 'Próximamente',
    component: ComingSoonView,
    imageName: 'menuiconComingSoon'
  },
];

module.exports = RoutesArray;
