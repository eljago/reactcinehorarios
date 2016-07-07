'use strict'

import React, {PropTypes} from 'react'
import {StyleSheet, View, Platform, TouchableHighlight, Image, Text} from 'react-native'
import Immutable from 'immutable'

import {MyGiftedListView} from '../../ReusableComponents'
import ComponentShowCastCell from './ComponentShowCastCell'
import {ImageHelper} from '../../Utils'
import {colors} from '../../Data'

export default class ComponentShowCast extends React.Component {

	static propTypes = {
    navigator: PropTypes.object
	}

	render() {
    const cast = this.props.people ? this.props.people : []
		return(
      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableHighlight 
            style={styles.backButton} 
            onPress={this.props.navigator.pop}
            underlayColor={'transparent'}
          >
            <View style={styles.navRow}>
              <Image 
                source={require('../../../assets/MenuBackIcon.png')}
                style={styles.backImage} 
              />
              <Text style={styles.navTitle}>{this.props.title}</Text>
            </View>
          </TouchableHighlight>
        </View>
        <MyGiftedListView
          renderRow={this._renderRow.bind(this)}
          dataRows={Immutable.fromJS(cast)}
          ignoreContentInset={true}
        />
      </View>
		)
	}

	_renderRow(rowData, sectionID, rowID, highlightRow) {
    const name = rowData.get('name')
    const image_url = rowData.get('image_url')
    const character = rowData.get('character')
    const rowNumber = rowData.get('rowNumber')
    return (
      <ComponentShowCastCell
        name={name}
        role={character}
        imageUri={ImageHelper.addPrefixToPath(image_url, 'smaller_')}
        rowNumber={rowNumber}
        onPress={() => this.props.onPress(rowData)}
      />
    )
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    ...Platform.select({
      ios: {
        height: 64,
      },
      android: {
        height: 56,
      },
    }),
    backgroundColor: colors.navBar,
    justifyContent: 'flex-end'
  },
  backButton: {
    flex: 1
  },
  navRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  navTitle: {
    flex: 1,
    color: colors.navBarLetters,
    fontSize: 20,
    textAlign: 'center',
    marginLeft: -44
  },
  backImage: {
    width: 44,
    paddingLeft: 10,
    paddingRight: 10,
  }
})