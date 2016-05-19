'use strict';

import React, { PropTypes } from 'react'
import Relay from 'react-relay'

import ComponentTheaters from './ComponentTheaters'
import {getFunctionsRoute} from '../../routes/navigatorRoutes'

class ContainerTheaters extends React.Component {

  constructor(props) {
    super(props);

    props.relay.setVariables({
      cinema_id: props.extraData.cinema_id,
    });
  }

  render() {
    const dataRows = this.props.viewer ? this.props.viewer.api_theaters : [];

    return (
      <ComponentTheaters 
        onPress={this._onPress.bind(this)}
        dataRows={dataRows}
      />
    );
  }

  _onPress(rowData) {
    let functionsRoute = getFunctionsRoute(new Date(), rowData.theater_id, rowData.name);
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