'use strict';

import React, { PropTypes } from 'react-native';

import { MyGiftedListView, MovieCell } from '../ReusableComponents';

import { ImageHelper } from '../Utils';

export default class ComponentComingSoon extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    onFetch: PropTypes.func
  };
  static displayName = "ComponentComingSoon";

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
      <MovieCell
        rowID={rowID}
        onPress={() => this.props.onPress(rowData)}
        title={rowData.name}
        subtitle={rowData.debut}
        imageUri={`http://cinehorarios.cl${ImageHelper.getThumbImage(rowData.image_url)}`}
      />
    );
  }
}