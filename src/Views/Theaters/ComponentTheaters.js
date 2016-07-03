'use strict';

import React, { PropTypes } from 'react';

import { SimpleCell, MyGiftedListView } from '../../ReusableComponents';

export default class ComponentTheaters extends React.Component {

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
      <SimpleCell
        rowNumber={rowData.get('rowNumber')}
        title={rowData.get('name')}
        onPress={() => this.props.onPress(rowData)}
      />
    );
  }
}