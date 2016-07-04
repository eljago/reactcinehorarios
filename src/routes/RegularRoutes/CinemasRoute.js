'use strict'

import React from 'react';
import Cinemas from '../../Views/Cinemas';

export default class CinemasRoute {

  sceneType = 'navItem';
  title = "CinesNav";
  cinemas = require('../../Data/Cinemas')

  renderScene(navigator) {
    return (
      <Cinemas
        cinemas={this.cinemas}
        navigator={navigator}
      />
    );
  }
}