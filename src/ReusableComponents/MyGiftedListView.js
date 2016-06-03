'use strict';

import React, { PropTypes } from 'react';
import { View, StyleSheet, ListView, Platform } from 'react-native';

import { EmptyView, SeparatorView } from './';

export default class MyGiftedListView extends React.Component {

  static propTypes = {
    scrollsToTop: PropTypes.bool,
    renderRow: PropTypes.func,
    dataRows: PropTypes.array
  };
  static defaultProps = {
    pagination: false
  };

  constructor(props) {
    super(props);
    this._addRowNumbers(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataRows)
    };
  }

  componentWillReceiveProps(nextProps) {
    this._addRowNumbers(nextProps);
    if (this.props.dataRows !== nextProps.dataRows) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.dataRows)
      });
    }
  }

  render() {
    const contentInset = (Platform.OS === 'ios') ? 49 : 0;
    
    return (
    	<View style={[styles.container, this.props.style]}>
        <ListView
          contentContainerStyle={this.props.listViewStyle}
          scrollsToTop={this.props.scrollsToTop}
          dataSource={this.state.dataSource}
          renderRow={this.props.renderRow}
          enableEmptySections={true}
          initialListSize={1}
          automaticallyAdjustContentInsets={false}
          contentInset={{bottom: contentInset}}
        />
      </View>
    );
  }

  _renderSeparatorView(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <SeparatorView key={rowID}/>
    );
  }

  _addRowNumbers(props) {
    if (props.dataRows) {
      for (let index=0;index<props.dataRows.length;index++) {
        props.dataRows[index].rowNumber = index;
      }
    }
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
