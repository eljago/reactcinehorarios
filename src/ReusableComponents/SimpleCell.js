'use strict';

import React, { Text, TouchableHighlight, View, StyleSheet, PropTypes } from 'react-native'

import { Colors } from '../Data'
import { RightAccesoryView } from './'

export default class SimpleCell extends React.Component {
  
  static propTypes = {
    title: PropTypes.string,
    rowID: PropTypes.string,
    onPress: PropTypes.func
  };
  static displayName = "SimpleCell";

  constructor(props) {
    super(props);
  }

  render() {
    let title = this.props.title;
    let cellBackgroundColor = this.props.rowID % 2 == 0 ? 'white' : colors.silver;

    return(
      <TouchableHighlight
        underlayColor={colors.concrete}
        onPress={() => this.props.onPress()}>
        <View style={[styles.rowContainer, {backgroundColor: cellBackgroundColor}]}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              {title}
            </Text>
          </View>
          <RightAccesoryView />
        </View>
      </TouchableHighlight>
    );
  }
}


let styles = StyleSheet.create({

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