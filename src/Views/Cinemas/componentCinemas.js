'use strict';

import React, { PropTypes } from 'react';

import {MyGiftedListView} from '../../ReusableComponents';
import CinemaCell from './componentCinemaCell';

export default class ComponentCinemas extends React.Component {

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
    const { name, images, rowNumber } = rowData;
    const image = images[Math.floor(Math.random()*images.length)];

    return (
      <CinemaCell
        title={name}
        image={image}
        rowNumber={rowNumber}
        onPress={() => this.props.onPress(rowData)}
      />
    );
  }
}