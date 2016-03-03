'use strict';

import React, { StyleSheet, TouchableHighlight, View, Image, Text, PropTypes } from 'react-native'

import { colors } from '../Data'
import { RightAccesoryView } from './'

export default class MovieCell extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    rowID: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imageUri: PropTypes.string
  };
  static displayName = "MovieCell";

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(typeof colors);
  }

  render() {
    return(
      <TouchableHighlight
        underlayColor={ colors.concrete }
        onPress={ () => this.props.onPress() }>
        <View style={ styles.rowContainer }>
          <View style={ styles.imageContainer }>
            <Image
            resizeMode='contain'
            style={ styles.image }
            source={{ uri: this.props.imageUri }}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={ styles.name }>{ this.props.title }</Text>
            <Text style={ styles.genres }>{ this.props.subtitle }</Text>
          </View>
          <RightAccesoryView />
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
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, height: 0
    }
  }
});
