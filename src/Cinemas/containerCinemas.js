'use strict';

import React, { PropTypes, Navigator } from 'react-native'
import Relay from 'react-relay'

import ComponentCinemas from './componentCinemas'
import {getTheatersRoute} from '../routes/navigatorRoutes'

class ContainerCinemas extends React.Component {

  render() {
    let dataRows = this.props.viewer.cinemas ? this.props.viewer.cinemas.edges : [];
    return (
      <ComponentCinemas 
        onPress={this._onPress.bind(this)}
        dataRows={dataRows}
      />
    );
  }

  _onPress(cinemaNode) {
    let theatersRoute = getTheatersRoute(cinemaNode.cinema_id, cinemaNode.name);
    this.props.navigator.push(theatersRoute);
  }
}

export default Relay.createContainer(ContainerCinemas, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        cinemas(first: 10) {
          edges {
            node {
              cinema_id
              name
              image
            }
          }
        }
      }
    `
  },
});