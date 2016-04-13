'use strict';

import React, {
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
  Text,
  PropTypes
} from 'react-native'

import { colors } from '../Data'
import { RightAccessoryView } from './'

export default class MovieCell extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    rowNumber: PropTypes.number,
    onPress: PropTypes.func,
    subtitle: PropTypes.string,
    imageUri: PropTypes.string
  };

  render() {
    const {title, rowNumber, onPress, subtitle, imageUri} = this.props;
    const cellBackgroundColor = rowNumber % 2 == 0 ? 'white' : colors.silver;

    return(
      <TouchableHighlight
        underlayColor={colors.midnightBlue}
        onPress={onPress}
      >
        <View style={[styles.rowContainer, {backgroundColor: cellBackgroundColor}]}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode='stretch'
              style={styles.image}
              source={{uri: imageUri}}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.genres}>{subtitle}</Text>
          </View>
          <RightAccessoryView />
        </View>
      </TouchableHighlight>
    );
  }
}

let styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 22,
    color: colors.navBar,
  },
  genres: {
    fontSize: 18,
    marginTop: 5
  },
  image: {
    flex: 1
  },
  imageContainer: {
    width: 80,
    height: 120,
    alignSelf: 'flex-start',
    backgroundColor: 'gray',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, height: 0
    }
  }
});
