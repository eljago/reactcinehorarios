'use strict';

import React, { PropTypes } from 'react-native';

import { MyGiftedListView } from '../ReusableComponents';
import CinemaCell from './componentCinemaCell';

export default class ComponentCinemas extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    onFetch: PropTypes.func
  };
  static displayName = "ComponentTheaters";

  render() {
    return (
      <MyGiftedListView
        rowView={this._renderRowView.bind(this)}
        onFetch={this.props.onFetch}
      />
    );
  }

  _renderRowView(rowData, sectionID, rowID) {
    return (
      <CinemaCell
        title={rowData.name}
        images={rowData.images}
        rowID={rowID}
        onPress={() => this.props.onPress(rowData)} />
    );
  }
}