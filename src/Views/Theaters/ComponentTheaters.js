'use strict';

import React, { PropTypes } from 'react-native';

import { SimpleCell, MyGiftedListView } from '../../ReusableComponents';

export default class ComponentTheaters extends React.Component {

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
    const {name, rowNumber} = rowData;
    return (
      <SimpleCell
        title={name}
        rowNumber={rowNumber}
        onPress={() => this.props.onPress(rowData)}
      />
    );
  }
}