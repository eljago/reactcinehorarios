'use strict'

import React from 'react';
import {StyleSheet, Platform, View} from 'react-native';

export default class SimpleRoute {

  constructor(props) {
    this.title = props.title;
    this.component = props.component;
    this.tabBarIcon = props.tabBarIcon;
    this.hideNavBar = props.hideNavBar;
    this.extraProps = props.extraProps;
  }

  renderScene(navigator = null) {
    const Component = this.component;
    return(
			<Component
				navigator={navigator}
				{...this.extraProps}
			/>
		);
  }
}