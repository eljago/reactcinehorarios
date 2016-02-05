'use strict';

import React, { PropTypes } from 'react-native';
import MyGiftedListView from './mygiftedlistview';

import SimpleCell from '../components/simplecell';

export default class Theaters extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    onFetch: PropTypes.func
  };
  static displayName = "Theaters";

  constructor(props) {
    super(props);
  }

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
      <SimpleCell title={rowData.name} rowID={rowID} onPress={() => {
        this.props.onPress(rowData);
      }} />
    );
  }
}