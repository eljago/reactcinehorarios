'use strict';

import React, { View, StyleSheet, Platform, PropTypes } from 'react-native';
import GiftedListView from 'react-native-gifted-listview';

import EmptyView from './emptyview';
import SeparatorView from './separatorview';
import colors from '../../Data/colors';

export default class MyGiftedListView extends React.Component {

  static propTypes = {
    rowView: PropTypes.func,
    onFetch: PropTypes.func
  };
  static displayName = "MyGiftedListView";

  constructor(props) {
    super(props);
  }

  render() {
    let marginTop = Platform.OS === 'ios' ? 20 : 12;

    return (
    	<View style={[styles.container, { marginTop: marginTop }]}>
        <GiftedListView
          rowView={this.props.rowView}
          onFetch={this.props.onFetch}
          firstLoader={true}
          pagination={false}
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
    return (
      <SeparatorView />
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
});