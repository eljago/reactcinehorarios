'use strict';

import React, { PropTypes } from 'react';

import { MyGiftedListView, MovieCell } from '../../ReusableComponents';

import { ImageHelper } from '../../Utils';

export default class ComponentBillboard extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    dataRows: PropTypes.array
  };

  render() {
    return (
      <MyGiftedListView
        renderRow={this._renderRow.bind(this)}
        dataRows={this.props.dataRows}
      />
    );
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    const {
      name,
      genres,
      image_url,
      duration,
      rowNumber,
      imdb_code,
      imdb_score,
      metacritic_url,
      metacritic_score,
      rotten_tomatoes_url,
      rotten_tomatoes_score} = rowData;

    return (
      <MovieCell
        rowNumber={rowNumber}
        onPress={() => this.props.onPress(rowData)}
        title={name}
        subtitle={genres}
        imageUri={ImageHelper.addPrefixToPath(image_url, 'smaller_')}
        imdb_code={imdb_code}
        imdb_score={imdb_score}
        metacritic_url={metacritic_url}
        metacritic_score={metacritic_score}
        rotten_tomatoes_url={rotten_tomatoes_url}
        rotten_tomatoes_score={rotten_tomatoes_score}
      />
    );
  }
}