'use strict';

import React, { PropTypes } from 'react';
import {
  Dimensions,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

import { colors } from '../Data'

export default class MenuCell extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
  };

  render() {
    const width = Dimensions.get('window').width * (2/3);
    return(
      <TouchableHighlight
        underlayColor={colors.underlayColor}
        onPress={() => this.props.onPress()}
      >
        <View style={[{width: width}, styles.rowContainer]}>
          <Text style={styles.name}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

let styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5
  },
  name: {
    color: 'black',
    textAlign: 'center',
    fontSize: 26
  }
});
