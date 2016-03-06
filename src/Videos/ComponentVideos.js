'use strict'

import React, { PropTypes } from 'react-native'

import ComponentVideoCell from './ComponentVideoCell'
import { MyGiftedListView } from '../ReusableComponents'

export default class ComponentVideos extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    onPressShow: PropTypes.func,
    onFetch: PropTypes.func
  };
  static displayName = "ComponentVideos";

  render() {
    return (
      <MyGiftedListView
        rowView={this._renderRowView.bind(this)}
        onFetch={this.props.onFetch}
        pagination={true}
      />
    );
  }

  _renderRowView(rowData, sectionID, rowID) {
    return (
      <ComponentVideoCell
        title={rowData.name}
        subtitle={rowData.show.name}
        image1={rowData.show.portrait_image}
        image2={rowData.image_url}
        rowID={rowID}
        onPress={() => this.props.onPress(rowData)}
        onPressShow={() => this.props.onPressShow(rowData)}
      />
    );
  }
}
