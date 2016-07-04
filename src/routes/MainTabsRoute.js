'use strict'

class MainTabsRoute {
  constructor() {
    
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