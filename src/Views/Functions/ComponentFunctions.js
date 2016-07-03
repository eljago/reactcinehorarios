'use strict';

import React, { PropTypes } from 'react';

import ComponentFunctionCell from './ComponentFunctionCell';
import { MyGiftedListView } from '../../ReusableComponents';
import { ImageHelper } from '../../Utils'

export default class ComponentFunctions extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    dataRows: PropTypes.object
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
      <ComponentFunctionCell
        rowNumber={rowData.get('rowNumber')}
        title={rowData.get('name')}
        imageUri={ImageHelper.addPrefixToPath(rowData.get('image_url'), 'smaller_')}
        functions={rowData.get('functions')}
        onPress={() => this.props.onPress(rowData)}
      />
    );
  }
}