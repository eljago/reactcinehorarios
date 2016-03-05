'use strict';

import React, { StyleSheet, PropTypes } from 'react-native'

import Router from 'react-native-simple-router'

import { routes, colors } from '../Data'
import BackButton from './BackButton'
import { MenuButton } from '../ReusableComponents'

// The Router wrapper
export default class MainView extends React.Component {

  static propTypes = {
    openMenu: PropTypes.func
  };
  static displayName = "MainView";

  render() {
    return (
      <Router
        ref={'router'}
        firstRoute={routes.Cinemas}
        headerStyle={styles.header}
        backButtonComponent={BackButton}
        customAction={this.props.openMenu}
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
