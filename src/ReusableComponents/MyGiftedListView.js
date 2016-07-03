'use strict';

import React, { PropTypes } from 'react';
import { ListView } from 'react-native';

import Immutable from 'immutable';

export default class MyGiftedListView extends React.Component {

  state = {
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => !Immutable.is(r1, r2)})
  }
  static propTypes = {
    scrollsToTop: PropTypes.bool,
    renderRow: PropTypes.func,
    dataRows: PropTypes.object
  };
  static defaultProps = {
    dataRows: Immutable.fromJS([])
  }

  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.state.dataSource.cloneWithRows(this._getDataSourceRows(props.dataRows))
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._getDataSourceRows(nextProps.dataRows))
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        scrollsToTop={this.props.scrollsToTop}
        renderRow={this.props.renderRow}
        contentContainerStyle={this.props.listViewStyle}
        enableEmptySections={true}
        initialListSize={1}
        automaticallyAdjustContentInsets={false}
      />
    );
  }

  _getDataSourceRows(dataRows) {
    return dataRows.toArray().map((dataRow, i) => {
      const newDataRow = dataRow.set('rowNumber', i);
      return newDataRow;
    });
  } 
}
