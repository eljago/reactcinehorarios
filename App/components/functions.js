'use strict';

import React, { PropTypes } from 'react-native';

import MyGiftedListView from './mygiftedlistview';
import FunctionsCell from './functionscell';

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
    console.log(rowData);
    return (
      <FunctionsCell 
        rowData={rowData}
        rowID={rowID}
        onPress={() => {
          this.props.onPress(rowData);
        }}
      />
    );
  }
}
