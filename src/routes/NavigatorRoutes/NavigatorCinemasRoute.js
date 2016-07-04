'use strict';

import CinemasRoute from '../RegularRoutes/CinemasRoute';

export default class NavigatorCinemasRoute {
  sceneType = 'nav';
  title = 'CinesTab';
  initialRoute = new CinemasRoute();
  tabIcon = require('../../../assets/Cinemas.png');
}