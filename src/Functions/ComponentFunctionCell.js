'use strict';

import React, { Text, TouchableHighlight, View, StyleSheet, PropTypes, Image } from 'react-native'

import { colors } from '../Data'
import { RightAccessoryView } from '../ReusableComponents'

export default class ComponentFunctionCell extends React.Component {
  
  static propTypes = {
    title: PropTypes.string,
    imageUri: PropTypes.string,
    functions: PropTypes.array,
    rowNumber: PropTypes.number,
    onPress: PropTypes.func
  };

  render() {
    const title = this.props.title;
    const imageUri = this.props.imageUri;
    const functions = this.props.functions;
    const cellBackgroundColor = this.props.rowNumber % 2 == 0 ? 'white' : colors.silver;

    return(
      <TouchableHighlight
        underlayColor={colors.concrete}
        onPress={() => {this.props.onPress()}}>
          <View style={[styles.rowContainer, {backgroundColor: cellBackgroundColor}]}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode='cover'
                style={ styles.image }
                source={{uri: `http://cinehorarios.cl${imageUri}`}}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{title}</Text>
              {this._getFunctionsViews(functions)}
            </View>
            <RightAccessoryView />
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
              {f.function_types.join('   ')}
            </Text>
            <Text style={styles.showtimes}>
              {f.showtimes.join('   ')}
            </Text>
          </View>
        );
      })
    );
  }
}


const styles = StyleSheet.create({

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
  }

});