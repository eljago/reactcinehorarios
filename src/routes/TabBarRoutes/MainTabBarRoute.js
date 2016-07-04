'use strict';

import NavigatorCinemasRoute from '../NavigatorRoutes/NavigatorCinemasRoute';

export default class MainTabBarRoute {
  sceneType = 'tabBar';
  tabBarRoutes = [new NavigatorCinemasRoute()];
}