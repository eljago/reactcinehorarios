'use strict';

import React, { PropTypes } from 'react-native';

import ComponentFunctionCell from './ComponentFunctionCell';
import { MyGiftedListView } from '../../ReusableComponents';

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
    return (
      <ComponentFunctionCell
        title={rowData.name}
        imageUri={rowData.image_url}
        functions={rowData.functions}
        rowNumber={rowData.rowNumber}
        onPress={() => this.props.onPress(functionNode)}
      />
    );
  }
}