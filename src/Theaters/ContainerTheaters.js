'use strict';

import React, { PropTypes } from 'react-native'
import Relay from 'react-relay'

import ComponentTheaters from './ComponentTheaters'
import {getFunctionsRoute} from '../routes/navigatorRoutes'

class ContainerTheaters extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.props.relay.setVariables({
      cinema_id: props.extraData.cinema_id,
    });
  }

  render() {
    let dataRows = this.props.viewer.api_theaters ? this.props.viewer.api_theaters : [];
    return (
      <ComponentTheaters 
        onPress={this._onPress.bind(this)}
        dataRows={dataRows}
      />
    );
  }

  _onPress(theaterNode) {
    let date = new Date();
    let formattedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

    let functionsRoute = getFunctionsRoute(formattedDate, theaterNode.theater_id);
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