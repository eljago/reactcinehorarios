'use strict';

import React, { PropTypes } from 'react-native';

import { MyGiftedListView } from '../../ReusableComponents';
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
    let cinemaNode = rowData.node;

    return (
      <CinemaCell
        title={cinemaNode.name}
        image={cinemaNode.image}
        rowNumber={rowData.rowNumber}
        onPress={() => this.props.onPress(cinemaNode)} />
    );
  }
}