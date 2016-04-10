'use strict';

import React, { PropTypes } from 'react-native';

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
    return (
      <MovieCell
        rowID={rowID}
        onPress={() => this.props.onPress(rowData)}
        title={rowData.name}
        subtitle={rowData.genres}
        imageUri={ImageHelper.addPrefixToPath(rowData.image_url, 'small_')}
      />
    );
  }
}