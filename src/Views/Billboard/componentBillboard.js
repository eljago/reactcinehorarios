'use strict';

import React, { PropTypes } from 'react';

import { MyGiftedListView, MovieCell } from '../../ReusableComponents';

import { ImageHelper } from '../../Utils';

export default class ComponentBillboard extends React.Component {

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
    const {name, genres, image_url, duration, rowNumber} = rowData;

    return (
      <MovieCell
        rowNumber={rowNumber}
        onPress={() => this.props.onPress(rowData)}
        title={name}
        subtitle={genres}
        imageUri={ImageHelper.addPrefixToPath(image_url, 'smaller_')}
      />
    );
  }
}