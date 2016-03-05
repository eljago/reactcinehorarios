'use strict';

import React, {
  Dimensions,
  View,
  PropTypes,
  StyleSheet
} from 'react-native'

import GiftedListView from 'react-native-gifted-listview'
import MenuCell from './componentMenuCell'
import { colors } from '../Data'

const window = Dimensions.get('window');

export default class ComponentMenu extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    onFetch: PropTypes.func
  };
  static displayName = "ComponentMenu";

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <GiftedListView
            rowView={this._renderRowView.bind(this)}
            onFetch={this.props.onFetch}
            firstLoader={true}
            pagination={false}
            refreshable={false}
            withSections={false}
          />
        </View>
      </View>
    );
  }

  _renderRowView(rowData, sectionID, rowID) {
    return (
      <MenuCell
        title={rowData.name}
        onPress={() => this.props.onPress(rowData)} />
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.midnightBlue,
    width: window.width,
    height: window.height,
    alignItems: 'flex-end'
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
