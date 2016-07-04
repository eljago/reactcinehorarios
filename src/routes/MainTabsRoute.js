'use strict';

import Content from '../App/Content';

class LoginRoute {
  constructor() {

  }
  renderScene(navigator) {
    return (
      <Cinemas
        navigator={navigator}
      />
    );
  }
}