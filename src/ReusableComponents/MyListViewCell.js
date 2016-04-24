'use strict';

import React, { TouchableHighlight, StyleSheet, PropTypes, View } from 'react-native'

import {colors} from '../Data';
import {RightAccessoryView} from './';

export default class MyListviewCell extends React.Component {

	static propTypes = {
		rowNumber: PropTypes.number,
    onPress: PropTypes.func
	};

  render() {
  	const {rowNumber, onPress, children} = this.props;
    const cellBackgroundColor = rowNumber % 2 == 0 ? 'white' :  '#ECF0F1';

    return (
      <TouchableHighlight
      	style={styles.container}
      	onPress={onPress}
      	underlayColor={colors.cellsUnderlayColor}
      >
        <View style={[styles.rowContainer, {backgroundColor: cellBackgroundColor}]}>
      		{children}
          <RightAccessoryView />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  }
});
