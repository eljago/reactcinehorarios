'use strict';

import React, { PropTypes } from 'react';
import Relay from 'react-relay'

import ComponentBillboard from './componentBillboard';
import {getShowRoute} from '../../routes/navigatorRoutes'

class ContainerBillboard extends React.Component {

  render() {
    const dataRows = this.props.viewer ? this.props.viewer.api_billboard : [];
    
    return (
      <ComponentBillboard
        onPress={this._onPress.bind(this)}
        dataRows={dataRows}
      />
    );
  }

  _onPress(rowData) {
    const {show_id} = rowData;
    let showRoute = getShowRoute(show_id);
    this.props.navigator.superNavigator.push(showRoute);
  }
}

export default Relay.createContainer(ContainerBillboard, {

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        api_billboard{
          show_id
          name
          image_url
          genres
          duration
        }
      }
    `
  },
});