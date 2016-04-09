'use strict';

import React, { View, StyleSheet, PropTypes, ListView } from 'react-native'

import { EmptyView, SeparatorView } from './'

export default class MyGiftedListView extends React.Component {

  static propTypes = {
    renderRow: PropTypes.func,
    dataRows: PropTypes.array
  };
  static defaultProps = {
    pagination: false
  };

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataRows)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.dataRows !== nextProps.dataRows) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.dataRows)
      });
    }
  }

  render() {
    return (
    	<View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.props.renderRow}
          renderSeparator={this._renderSeparatorView}
        />
      </View>
    );
  }

  _renderSeparatorView(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <SeparatorView key={rowID}/>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
