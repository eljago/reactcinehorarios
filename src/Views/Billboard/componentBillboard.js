'use strict';

import React, { PropTypes } from 'react';
import {StyleSheet, View} from 'react-native';

import ActionButton from 'react-native-action-button';

import { MyGiftedListView, MovieCell } from '../../ReusableComponents';

export default class ComponentBillboard extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    dataRows: PropTypes.object,
    onButtonPressed: PropTypes.func
  };

  render() {
    return (
      <View style={styles.container}>
        <MyGiftedListView
          renderRow={this._renderRow.bind(this)}
          dataRows={this.props.dataRows}
        />
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={this.props.onButtonPressed}
          type={'tab'}
          position={'right'}
          offsetX={15}
          offsetY={15}
        />
      </View>
    );
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <MovieCell
        rowNumber={rowData.get('rowNumber')}
        onPress={() => this.props.onPress(rowData)}
        showName={rowData.get('name')}
        showGenres={rowData.get('genres')}
        showDuration={rowData.get('duration')}
        showRating={rowData.get('rating')}
        showImageUrl={rowData.get('image_url')}
        showImdbCode={rowData.get('imdb_code')}
        showImdbScore={rowData.get('imdb_score')}
        showMetacriticUrl={rowData.get('metacritic_url')}
        showMetacriticScore={rowData.get('metacritic_score')}
        showRottenTomatoesUrl={rowData.get('rotten_tomatoes_url')}
        showRottenTomatoesScore={rowData.get('rotten_tomatoes_score')}
        showingScores={rowData.get('showingScores')}
        isBillboard={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});