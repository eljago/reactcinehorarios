'use strict'

import React, {PropTypes} from 'react';

import {MyGiftedListView} from '../../ReusableComponents';
import ComponentShowCastCell from './ComponentShowCastCell';
import {ImageHelper} from '../../Utils';

export default class ComponentShowCast extends React.Component {

	static propTypes = {
		cast: PropTypes.array
	};

	constructor(props) {
		super(props);
	}

	render() {
		return(
      <MyGiftedListView
        renderRow={this._renderRow.bind(this)}
        dataRows={this.props.cast}
      />
		);
	}

	_renderRow(rowData, sectionID, rowID, highlightRow) {
    const {name, character, rowNumber, image_url} = rowData;
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