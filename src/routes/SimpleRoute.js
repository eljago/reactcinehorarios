'use strict'

import React from 'react';

export default class SimpleRoute {

  constructor(props) {
    this.title = props.title;
    this.component = props.component;
    this.tabBarIcon = props.tabBarIcon;
    this.hideNavBar = props.hideNavBar;
  }

  renderScene(navigator = null) {
    const Component = this.component;
    return(<Component navigator={navigator}/>);
  }
}
