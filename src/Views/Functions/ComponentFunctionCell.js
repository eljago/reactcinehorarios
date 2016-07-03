'use strict';

import React, { PropTypes } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'

import { colors } from '../../Data'
import { MyListViewCell } from '../../ReusableComponents'

export default class ComponentFunctionCell extends React.Component {
  
  static propTypes = {
    title: PropTypes.string,
    imageUri: PropTypes.string,
    functions: PropTypes.object,
    rowNumber: PropTypes.number,
    onPress: PropTypes.func
  };

  render() {
    const {title, imageUri, functions, rowNumber, onPress} = this.props;

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
            <Text style={styles.name}>{title}</Text>
            {getFunctionsViews(functions)}
          </View>
        </View>
      </MyListViewCell>
    );
  }
}

const getFunctionsViews = (functions) => {
  return(
    functions.map((f, i) => {
      return(
        <View
          key={i}
          style={styles.functionView}>
          <Text style={styles.functionTypes}>
            {f.get('function_types').join('   ')}
          </Text>
          <Text style={styles.showtimes}>
            {f.get('showtimes').join('   ')}
          </Text>
        </View>
      );
    })
  );
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
  functionView: {
    marginTop: 5
  },
  functionTypes: {
    fontSize: 18, 
    fontWeight: '300',
    color: 'gray',
    marginTop: 5
  },
  showtimes: {
    fontFamily: 'Verdana',
    fontSize: 16,
    color: '#000',
    marginTop: 2
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