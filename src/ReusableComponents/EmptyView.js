'use strict';

import React, {PropTypes} from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

export default class EmptyView extends React.Component {
    
  static propTypes = {
    refreshCallback: PropTypes.func
  };

  render() {
    return (
      <View style={styles.defaultView}>
        <Text style={styles.defaultViewTitle}>
          No hay contenido para mostrar
        </Text>
        
        <TouchableHighlight
          underlayColor='#c8c7cc'
          onPress={this.props.refreshCallback}>
          <Text style={styles.refreshText}>↻</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  defaultView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  defaultViewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  refreshText: {
    fontSize: 50
  }
});