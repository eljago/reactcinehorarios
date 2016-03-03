'use strict'

import React, { View, StyleSheet, TouchableHighlight, Image } from 'react-native';

export default class ComposeIcon extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableHighlight
          style={{flex: 1}}
          underlayColor="transparent"
          onPress={ () => console.log('pressed') }>
          <Image 
            source={require('../Images/MenuIcon.png')} 
            style={styles.icon} 
            resizeMode='contain'/>
        </TouchableHighlight>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  icon: {
    width: 44,
    height: 44,
    marginTop: 4,
    marginRight: 15
  },
});