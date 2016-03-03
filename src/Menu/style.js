'use strict';

import React{
  StyleSheet,
  Dimensions
} from 'react-native'

import { colors } from '../Data'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: colors.midnightBlue,
  },
  listView: {
    flex: 1,
    backgroundColor: colors.midnightblue,
  },

  // ROW STYLES
  rowContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  textContainer: {
    padding: 10,
    flex: 2
  },
  name: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    flex: 1
  },
});
