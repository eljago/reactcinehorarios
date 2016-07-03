'use strict';

import React, { PropTypes } from 'react';
import {StyleSheet, View} from 'react-native';

import ActionButton from 'react-native-action-button';

import { MyGiftedListView, MovieCell } from '../../ReusableComponents';

export default class ComponentComingSoon extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    dataRows: PropTypes.object
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
    return (
      <MovieCell
        onPress={() => this.props.onPress(rowData)}
        showName={rowData.get('name')}
        showGenres={rowData.get('genres')}
        showDebut={rowData.get('debut')}
        showImageUrl={rowData.get('image_url')}
        showImdbCode={rowData.get('imdb_code')}
        showImdbScore={rowData.get('imdb_score')}
        showMetacriticUrl={rowData.get('metacritic_url')}
        showMetacriticScore={rowData.get('metacritic_score')}
        showRottenTomatoesUrl={rowData.get('rotten_tomatoes_url')}
        showRottenTomatoesScore={rowData.get('rotten_tomatoes_score')}
        showingScores={rowData.get('showingScores')}
        isBillboard={false}
      />
    );
  }
}