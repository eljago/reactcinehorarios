'use strict'

import React, {PropTypes} from 'react'

import Immutable from 'immutable'

import {MyGiftedListView} from '../../ReusableComponents'
import ComponentShowCastCell from './ComponentShowCastCell'
import {ImageHelper} from '../../Utils'

export default class ComponentShowCast extends React.Component {

	static propTypes = {
    navigator: PropTypes.object
	};

	render() {
    const cast = this.props.people ? this.props.people : [];
		return(
      <MyGiftedListView
        renderRow={this._renderRow.bind(this)}
        dataRows={Immutable.fromJS(cast)}
        ignoreContentInset={true}
      />
		)
	}

	_renderRow(rowData, sectionID, rowID, highlightRow) {
    const name = rowData.get('name');
    const image_url = rowData.get('image_url');
    const character = rowData.get('character');
    const rowNumber = rowData.get('rowNumber');
    return (
      <ComponentShowCastCell
        name={name}
        role={character}
        imageUri={ImageHelper.addPrefixToPath(image_url, 'smaller_')}
        rowNumber={rowNumber}
        onPress={() => this.props.onPress(rowData)}
      />
    );
	}
}
