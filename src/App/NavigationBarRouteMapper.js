'use strict'

import React from 'react'
import {Text, View} from 'react-native'

import {NavButton} from './NavButton'
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
    if (route.title === 'Videos') {
      return(
        <View style={{flex: 1, flexDirection: 'row'}}>
          <NavButton
            onPress={navigator.pop()}
            imageSource={require('../../assets/MenuBackIcon.png')}
          />
          <NavButton
            style={{flex:1}}
            onPress={navigator.pop}
            imageSource={require('../../assets/MenuBackIcon.png')}
          />
        </View>
      );
    }
    return null;
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