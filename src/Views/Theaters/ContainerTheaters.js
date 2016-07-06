'use strict';

import React, { PropTypes } from 'react'
import Relay from 'react-relay'

import Immutable from 'immutable';

import ComponentTheaters from './ComponentTheaters'
import {getFunctionsRoute} from '../../routes/MyRoutes'

class ContainerTheaters extends React.Component {

  render() {
    const dataRows = Immutable.fromJS(this.props.viewer ? this.props.viewer.api_theaters : []);
    return (
      <ComponentTheaters 
        onPress={this._onPress.bind(this)}
        dataRows={dataRows}
      />
    );
  }

  _onPress(rowData) {
    const theater_id = rowData.get('theater_id');
    const name = rowData.get('name');
    const functionsRoute = getFunctionsRoute(name, theater_id);
    this.props.navigator.push(functionsRoute);
  }
}

export default Relay.createContainer(ContainerTheaters, {

  initialVariables: {
    cinema_id: 0
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        api_theaters(cinema_id: $cinema_id) {
          cinema_id
          theater_id
          name
          address
        }
      }
    `
  },
});