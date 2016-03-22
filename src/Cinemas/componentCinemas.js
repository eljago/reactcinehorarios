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

  _renderRowView(edge, sectionID, rowID) {
    return (
      <CinemaCell
        title={edge.node.name}
        image={edge.node.image}
        rowID={rowID}
        onPress={() => this.props.onPress(edge.node)} />
    );
  }
}