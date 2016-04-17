'use strict';

import React, { PropTypes } from 'react-native';

import { MyGiftedListView, MovieCell } from '../../ReusableComponents';

import { ImageHelper } from '../../Utils';

export default class ComponentComingSoon extends React.Component {

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
    let {name, debut, image_url, duration, rowNumber} = rowData;
    debut = debut ? `Estreno: ${debut}` : "";
    
    return (
      <MovieCell
        rowNumber={rowNumber}
        onPress={() => this.props.onPress(rowData)}
        title={name}
        subtitle={debut}
        imageUri={ImageHelper.addPrefixToPath(image_url, 'small_')}
      />
    );
  }
}