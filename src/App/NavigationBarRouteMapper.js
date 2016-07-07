'use strict'

import React from 'react'
import {Text, View} from 'react-native'

import NavButton from './NavButton'
import {colors} from '../Data'

export let NavigationBarRouteMapper = {

  LeftButton(route, navigator, index, navState) {
    var previousRoute = navState.routeStack[index - 1]
    if (previousRoute) {
      return(
        <NavButton
          onPress={() => {
            navigator.pop()
          }}
          imageSource={require('../../assets/MenuBackIcon.png')}
        />
      )
    }
    return null
  },

  RightButton(route, navigator, index, navState) {
    return typeof route.getNavRightButton === 'function' ? route.getNavRightButton() : null;
  },

  Title(route, navigator, index, navState) {
    return(
      <Text
        style={{
          color: colors.navBarLetters,
          fontSize: 20,
          marginTop: 8
        }}
      >
        {route.title}
      </Text>
    )
  }

};