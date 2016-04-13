'use strict';

import React, {
  Image,
  Text,
  TouchableHighlight,
  View,
  PropTypes,
  StyleSheet
} from 'react-native';

import {colors} from '../../Data'
import {RightAccessoryView} from '../../ReusableComponents'

export default class CinemaCell extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.number,
    rowNumber: PropTypes.number,
    onPress: PropTypes.func
  };

  render() {
    const {title, image, rowNumber, onPress} = this.props;
    var cellBackgroundColor = rowNumber % 2 == 0 ? 'white' :  colors.silver;

    return(
      <TouchableHighlight
      underlayColor={colors.midnightBlue}
      onPress={onPress}>
        <View>
          <View style={[styles.rowContainer, {backgroundColor: cellBackgroundColor}]}>
            <Image
              source={image}
              style={styles.image}/>
            <View style={styles.textContainer}>
              <Text style={styles.name}>
                {title}
              </Text>
            </View>
            <RightAccessoryView/>
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
  separator: {
    height: 1,
    backgroundColor: '#ddd'
  }
});
