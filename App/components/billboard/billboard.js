'use strict';

import React, { PropTypes } from 'react-native';

import MyGiftedListView from '../reusables/mygiftedlistview';
import MovieCell from '../reusables/moviecell';

import imageHelper from '../../Utils/ImageHelper';

export default class Billboard extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    onFetch: PropTypes.func
  };
  static displayName = "Functions";

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
        subtitle={rowData.genres}
        imageUri={`http://cinehorarios.cl${imageHelper.getThumbImage(rowData.image_url)}`}
       />
    );
  }
}