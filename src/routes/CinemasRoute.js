'use strict'

import Cinemas from '../Views/Cinemas';

class LoginRoute {
  constructor() {
    this.cinemas = require('../Data/Cinemas')
  }
  renderScene(navigator) {
    return (
      <Cinemas
        cinemas={this.cinemas}
        navigator={navigator}
      />
    );
  }
}