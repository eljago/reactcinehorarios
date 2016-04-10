'use strict';

import React, { PropTypes } from 'react-native';

import ComponentFunctionCell from './ComponentFunctionCell';
import { MyGiftedListView } from '../../ReusableComponents';
import { ImageHelper } from '../../Utils'

export default class ComponentFunctions extends React.Component {

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
    const {name, functions, rowNumber, image_url} = rowData;
    return (
      <ComponentFunctionCell
        title={name}
        imageUri={ImageHelper.addPrefixToPath(image_url, 'small_')}
        functions={functions}
        rowNumber={rowNumber}
        onPress={() => this.props.onPress(rowData)}
      />
    );
  }
}