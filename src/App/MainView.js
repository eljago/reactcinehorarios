'use strict';

import React, { StyleSheet } from 'react-native'

import Router from 'react-native-simple-router'

import { routes, colors } from '../Data'
import BackButton from './BackButton'
import { MenuButton } from '../ReusableComponents'

// The Router wrapper
export default class MainView extends React.Component {

  render() {
    return (
      <Router
        firstRoute={routes.Cinemas}
        headerStyle={styles.header}
        backButtonComponent={BackButton}
        customAction={this.props.toggleMenu}
        handleBackAndroid={true}
        rightCorner={MenuButton}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.navBar
  },
});
