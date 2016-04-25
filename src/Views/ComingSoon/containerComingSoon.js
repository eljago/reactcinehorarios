'use strict';

import React, { PropTypes } from 'react-native';
import Relay from 'react-relay'

import ComponentComingSoon from './componentComingSoon';
import {getShowRoute} from '../../routes/navigatorRoutes'

class ContainerComingSoon extends React.Component {

  render() {
    const dataRows = this.props.viewer ? this.props.viewer.api_coming_soon : [];
    
    return (
      <ComponentComingSoon
        onPress={this._onPress.bind(this)}
        dataRows={dataRows}
      />
    );
  }

  _onPress(rowData) {
    const {show_id} = rowData;
    let showRoute = getShowRoute(show_id);
    this.props.navigator.push(showRoute);
  }
}

export default Relay.createContainer(ContainerComingSoon, {

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        api_coming_soon{
          show_id
          name
          debut
          image_url
          genres
          duration
        }
      }
    `
  },
});