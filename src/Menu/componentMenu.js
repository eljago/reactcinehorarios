'use strict';

import React, { PropTypes } from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../Data';
import { MyGiftedListView } from '../ReusableComponents';
import MenuCell from './componentMenuCell';

export default class ComponentMenu extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    dataRows: PropTypes.array
  };

  render() {
    return (
      <MyGiftedListView
        listViewStyle={styles.listView}
        scrollsToTop={false}
        renderRow={this._renderRow.bind(this)}
        dataRows={this.props.dataRows}
      />
    );
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <MenuCell
        title={rowData.title}
        onPress={() => this.props.onPress(rowData)}
      />
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 44
  }
});