'use strict'

import React from 'react'
import {StyleSheet, View} from 'react-native'
import {colors} from '../Data'

export default class SimpleRoute {

  constructor(props) {
    this.title = props.title
    this.component = props.component
    this.tabBarIcon = props.tabBarIcon
    this.hideNavBar = props.hideNavBar
    this.extraProps = props.extraProps
    this.getNavRightButton = props.getNavRightButton
  }

  renderScene(navigator = null) {
    const Component = this.component;
    return(
      <View style={styles.container}>
  			<Component
          title={this.title}
  				navigator={navigator}
  				{...this.extraProps}
  			/>
      </View>
		)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})