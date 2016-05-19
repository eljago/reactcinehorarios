'use strict';

import React, { PropTypes } from 'react';

import ComponentVideoCell from './ComponentVideoCell';
import { MyGiftedListView } from '../../ReusableComponents';
import { ImageHelper } from '../../Utils'

export default class ComponentVideos extends React.Component {

  static propTypes = {
    dataRows: PropTypes.array,
    onPress: PropTypes.func,
    onPressShow: PropTypes.func
  };

  render() {
    return (
      <MyGiftedListView
        renderRow={this._renderRow.bind(this)}
        dataRows={this.props.dataRows}
        pagination={true}
      />
    );
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    const {name, image_url, code, show} = rowData;
    return(
      <ComponentVideoCell 
        title={name}
        videoPortraitImageUri={ImageHelper.addPrefixToPath(image_url, 'smaller_')}
        showImageUri={ImageHelper.addPrefixToPath(show.image_url, 'smaller_')}
        onPress={() => this.props.onPress(rowData)}
        onPressShow={() => this.props.onPressShow(rowData)}
      />
    );
  }
}
