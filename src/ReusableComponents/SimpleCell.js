'use strict';

import React, { PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { colors } from '../Data';
import { MyListViewCell } from './';

export default class SimpleCell extends React.Component {
  
  static propTypes = {
    rowNumber: PropTypes.number,
    title: PropTypes.string,
    onPress: PropTypes.func
  };

  render() {
    const {rowNumber, title, onPress} = this.props;

    return(
      <MyListViewCell
        rowNumber={rowNumber}
        onPress={onPress}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </MyListViewCell>
    );
  }
}


const styles = StyleSheet.create({
  textContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    color: '#000',
    marginLeft: 10
  }
});