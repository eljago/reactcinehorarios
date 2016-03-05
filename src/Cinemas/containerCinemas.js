'use strict';

import React, { PropTypes } from 'react-native'

import ComponentCinemas from './componentCinemas'
// import ContainerTheaters from './theaters/containerTheaters';
import { cinemas } from '../Data'

export default class ContainerCinemas extends React.Component {

  static displayName = "ContainerCinemas";

  render() {
    return (
      <ComponentCinemas 
        onPress={this._onPress.bind(this)}
        onFetch={this._onFetch}
      />
    );
  }

  _onPress(rowData) {
    // this.props.navigator.push({
    //   title: rowData.name,
    //   component: TheatersContainer,
    //   extraData: {cinemaData: rowData}
    // });
  }

  _onFetch(page = 1, callback, options) {
    callback(cinemas);
  }
}