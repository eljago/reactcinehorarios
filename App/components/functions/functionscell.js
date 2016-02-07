'use strict';

import React, { Image, Text, TouchableHighlight, View, StyleSheet, PropTypes } from 'react-native';

import colors from '../../Data/colors';
import RightAccesoryView from '../reusables/rightaccessoryview';
import api from '../../Utils/api';
import ImageHelper from '../../Utils/ImageHelper';

export default class FunctionCell extends React.Component {

  static propTypes = {
    rowID: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    functions: PropTypes.array,
    imageUri: PropTypes.string
  };
  static displayName = "FunctionCell";

  constructor(props) {
    super(props);
  }

  render() {
    var cellBackgroundColor = this.props.rowID % 2 == 0 ? 'white' : colors.silver;

    return(
      <TouchableHighlight
        underlayColor={ colors.concrete }
        onPress={ () => { this.props.onPress() } }>
          <View style={ [styles.rowContainer, {backgroundColor: cellBackgroundColor}] }>
            <View style={ styles.imageContainer }>
              <Image
                resizeMode='cover'
                style={ styles.image }
                source={{ uri: this.props.imageUri }}
              />
            </View>
            <View style={ styles.textContainer }>
              <Text style={ styles.name }>
                { this.props.title }
              </Text>
              { this._getFunctionsViews(this.props.functions) }
            </View>
            <RightAccesoryView />
          </View>
      </TouchableHighlight>
    );
  }

  _getFunctionsViews(functions) {
    return(
      functions.map((f, i) => {
        return(
          <View style={styles.functionView}>
            <Text style={styles.functionTypes}>
              {f.function_types.split(", ").join('   ')}
            </Text>
            <Text style={styles.showtimes}>
              {f.showtimes.split(", ").join('   ')}
            </Text>
          </View>
        );
      })
    );
  }
}

let styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 22,
    fontWeight: '300',
    color: colors.navBar,
  },
  functionView: {
    marginTop: 5
  },
  functionTypes: {
    fontSize: 18, 
    fontWeight: '300',
    color: 'gray',
    marginTop: 5
  },
  showtimes: {
    fontFamily: 'Verdana',
    fontSize: 16,
    color: '#000',
    marginTop: 2
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
    },
    backgroundColor: 'gray',
  },
  rightAccessoryView: {
    width: 22,
    height: 22,
  }
});

