'use strict';

import React, { PropTypes } from 'react-native'
import Relay from 'react-relay'

import ComponentTheaters from './ComponentTheaters'

class ContainerTheaters extends React.Component {

  render() {
    return (
      <ComponentTheaters 
        onPress={this._onPress.bind(this)}
        onFetch={this._onFetch.bind(this)}
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
    // callback(this.props.viewer.cinemas.edges);
    callback(this.props.theaters);
  }
}

export default Relay.createContainer(ContainerTheaters, {
  fragments: {
    theater: () => Relay.QL`
      fragment on TheaterConnection {
          edges {
            node {
              name
              address
            }
          }
      }
    `
  },
});