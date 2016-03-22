'use strict';

import React, {
  Image,
  Text,
  TouchableHighlight,
  View,
  PropTypes,
  StyleSheet
} from 'react-native';

import { colors } from '../Data'

export default class CinemaCell extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    rowID: PropTypes.string,
    onPress: PropTypes.func
  };
  static displayName = "CinemaCell";

  render() {
    var cellBackgroundColor = this.props.rowID % 2 == 0 ? 'white' :  colors.silver;
    return(
      <TouchableHighlight
      underlayColor={colors.underlayColor}
      onPress={() => this.props.onPress() }>
        <View>
          <View style={[styles.rowContainer, {backgroundColor: cellBackgroundColor}]}>
            <Image
              source={{uri: `http://cinehorarios.cl${this.props.image}`}}
              style={styles.image}/>
            <View style={styles.textContainer}>
              <Text style={styles.name}>
                {this.props.title}
              </Text>
            </View>
            <Image
              style={styles.rightAccessoryView}
              source={require('../Images/RightAccesoryView.png')}/>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
}

let styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  textContainer: {
    flex: 1,
    marginLeft: 15
  },
  image: {
    width: 80,
    height: 80
  },
  name: {
    fontSize: 27,
    fontWeight: '300'
  },
  rightAccessoryView: {
    width: 22,
    height: 22
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd'
  }
});
