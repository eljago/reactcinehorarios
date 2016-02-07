'use strict';

import React, { PropTypes } from 'react-native';

import MyGiftedListView from '../reusables/mygiftedlistview';
import FunctionsCell from './functionscell';

import imageHelper from '../../Utils/ImageHelper';

export default class Functions extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    onFetch: PropTypes.func
  };
  static displayName = "Functions";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyGiftedListView
        rowView={this._renderRow.bind(this)}
        onFetch={this.props.onFetch}
      />
    );
  }

  _renderRow(rowData, sectionID, rowID) {
    return (
      <FunctionsCell 
        rowID={rowID}
        onPress={() => {this.props.onPress(rowData)}}
        title={rowData.name}
        subtitle={rowData.genres}
        functions={rowData.functions}
        imageUri={`http://cinehorarios.cl${imageHelper.getThumbImage(rowData.image_url)}`}
      />
    );
  }
}
