'use strict';

import React, { PropTypes } from 'react';
import {
  Dimensions,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

import { colors } from '../Data'

export default class MenuCell extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      cellStyle: {
        backgroundColor: 'transparent'
      }
    }
  }

  render() {
    const width = Dimensions.get('window').width * (2/3);
    return(
      <TouchableHighlight
        onShowUnderlay={this._onShowUnderlay.bind(this)}
        onHideUnderlay={this._onHideUnderlay.bind(this)}
        underlayColor={'transparent'}
        onPress={() => this.props.onPress()}
      >
        <View style={[{width: width}, styles.rowContainer, this.state.cellStyle]}>
          <Text style={[styles.name, this.state.textStyle]}>
            {this.props.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  _onShowUnderlay() {
    this.setState({
      cellStyle: {
        backgroundColor: colors.menuTouchOverlay
      }
    });
  }

  _onHideUnderlay() {
    this.setState({
      cellStyle: {
        backgroundColor: 'transparent'
      }
    });
  }
}

let styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  name: {
    color: 'white',
    textAlign: 'center',
    fontSize: 26
  }
});
