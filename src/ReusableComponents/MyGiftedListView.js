'use strict';

import React, { View, StyleSheet, PropTypes } from 'react-native'
import GiftedListView from 'react-native-gifted-listview'

import { EmptyView, SeparatorView } from './'
import { colors } from '../Data'

let separatorKey = 0;

export default class MyGiftedListView extends React.Component {

  static propTypes = {
    rowView: PropTypes.func,
    onFetch: PropTypes.func,
    pagination: PropTypes.bool
  };
  static defaultProps = {
    pagination: false
  };
  static displayName = "MyGiftedListView";

  render() {
    return (
    	<View style={styles.container}>
        <GiftedListView
          rowView={this.props.rowView}
          onFetch={this.props.onFetch}
          firstLoader={true}
          pagination={this.props.pagination}
          refreshable={true}
          withSections={false}

          emptyView={this._renderEmptyView}
          renderSeparator={this._renderSeparatorView}

          PullToRefreshViewAndroidProps={{
            colors: ['white'],
            progressBackgroundColor: colors.navBar
          }}
        />
      </View>
    );
  }

  _renderEmptyView(refreshCallback) {
    return (
      <EmptyView refreshCallback={refreshCallback} />
    );
  }

  _renderSeparatorView() {
    separatorKey = separatorKey + 1;
    return (
      <SeparatorView key={separatorKey}/>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
