'use strict';

import React, { PropTypes } from 'react'

import { MyGiftedListView } from '../ReusableComponents'
import MenuCell from './componentMenuCell'

export default class ComponentMenu extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    dataRows: PropTypes.array
  };

  render() {
    return (
      <MyGiftedListView
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