'use strict';

import React, { PropTypes, Navigator } from 'react-native'
import Relay from 'react-relay'

import ComponentCinemas from './componentCinemas'
import ContainerTheaters from '../Theaters/ContainerTheaters';

class ContainerCinemas extends React.Component {

  render() {
    return (
      <ComponentCinemas 
        onPress={this._onPress.bind(this)}
        onFetch={this._onFetch.bind(this)}
      />
    );
  }

  _onPress(rowData) {
    this.props.navigator.push({
      title: rowData.name,
      component: ContainerTheaters,
      rowData: rowData
    });
  }

  _onFetch(page = 1, callback, options) {
    callback(this.props.viewer.cinemas.edges);
  }
}

export default Relay.createContainer(ContainerCinemas, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        cinemas (first: 10) {
          edges {
            node {
              name
              image
            }
          }
        }
      }
    `
  },
});