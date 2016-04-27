'use strict'

import React, {Image, StyleSheet, PropTypes, TouchableHighlight} from 'react-native'

export class BackButton extends React.Component {

  static propTypes = {
    onPress: PropTypes.func
  };

  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
          underlayColor="transparent">
        <Image source={require('../../../assets/MenuBackIcon.png')} style={styles.backButton} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    width: 44,
    height: 44,
    marginLeft: 10,
    marginRight: 10,
    },
});