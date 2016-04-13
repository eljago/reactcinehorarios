'use strict';

import React, { Text, TouchableHighlight, View, StyleSheet, PropTypes } from 'react-native'

import { colors } from '../Data'
import { RightAccessoryView } from './'

export default class SimpleCell extends React.Component {
  
  static propTypes = {
    title: PropTypes.string,
    rowNumber: PropTypes.number,
    onPress: PropTypes.func
  };

  render() {
    const {title, rowNumber, onPress} = this.props;
    const cellBackgroundColor = rowNumber % 2 == 0 ? 'white' : colors.silver;

    return(
      <TouchableHighlight
        underlayColor={colors.midnightBlue}
        onPress={onPress}>
        <View style={[styles.rowContainer, {backgroundColor: cellBackgroundColor}]}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              {title}
            </Text>
          </View>
          <RightAccessoryView />
        </View>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({

  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },

  textContainer: {
    flex: 1
  },

  title: {
    fontSize: 20,
    fontWeight: '300',
    color: '#000'
  }

});