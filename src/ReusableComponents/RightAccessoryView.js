'use strict';

import React, { Image, StyleSheet } from 'react-native'

export default class RightAccesoryView extends React.Component {

  render() {
    return (
      <Image 
        style={styles.rightAccessoryView} 
        source={require('./Images/RightAccesoryView.png')}/>
    );
  }
}

const styles = StyleSheet.create({

  rightAccessoryView: {
    width: 22,
    height: 22,
  }

});