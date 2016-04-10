'use strict';

import React, {
  PropTypes
} from 'react-native'

import {MyGiftedListView} from '../ReusableComponents'
import MenuCell from './componentMenuCell'

export default class ComponentMenu extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    dataRows: PropTypes.array
  };

  render() {
    return (
      <MyGiftedListView
        renderRow={this._renderRow.bind(this)}
        dataRows={this.props.dataRows}
      />
    );
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <MenuCell
        title={rowData.name}
        onPress={() => this.props.onPress(rowData)}
      />
    );
  }
}