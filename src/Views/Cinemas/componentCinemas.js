'use strict';

import React, { PropTypes } from 'react';

import {MyGiftedListView} from '../../ReusableComponents';
import CinemaCell from './componentCinemaCell';

export default class ComponentCinemas extends React.Component {

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
    const name = rowData.get('name');
    const images = rowData.get('images');
    const rowNumber = rowData.get('rowNumber');
    const image = images.size > 0 ? images.get(Math.floor(Math.random()*images.size)) : null;

    return (
      <CinemaCell
        rowNumber={rowNumber}
        title={name}
        image={image}
        onPress={() => this.props.onPress(rowData)}
      />
    );
  }
}