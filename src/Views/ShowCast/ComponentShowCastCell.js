'use strict';

import React, { PropTypes } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'

import { colors } from '../../Data'
import { MyListViewCell } from '../../ReusableComponents'

export default class ComponentShowCastCell extends React.Component {
  
  static propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    imageUri: PropTypes.string,
    rowNumber: PropTypes.number,
    onPress: PropTypes.func
  };

  render() {
    const {name, role, imageUri, functions, rowNumber, onPress} = this.props;

    return(
      <MyListViewCell
        rowNumber={rowNumber}
        onPress={onPress}
      >
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode='stretch'
              style={ styles.image }
              source={{uri: imageUri}}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text>{role}</Text>
          </View>
        </View>
      </MyListViewCell>
    );
  }
}


const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  textContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: '300',
    color: colors.navBar,
  },
  image: {
    flex: 1
  },
  imageContainer: {
    width: 80,
    height: 120,
    alignSelf: 'flex-start',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, height: 0
    },
    backgroundColor: 'gray',
  }

});