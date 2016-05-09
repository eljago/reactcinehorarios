'use strict';

import React, { PropTypes } from 'react-native'
import Relay from 'react-relay'

import ComponentVideos from './ComponentVideos'
import {getVideosRoute} from '../../routes/navigatorRoutes'

class ContainerVideos extends React.Component {

  constructor(props) {
    super(props);

    props.relay.setVariables({
      pageNumber: 1
    });
  }

  render() {
    const dataRows = this.props.viewer ? this.props.viewer.api_videos : [];

    return (
      <ComponentVideos 
        onPress={this._onPress.bind(this)}
        dataRows={dataRows}
      />
    );
  }

  _onPress(rowData) {
    
  }
}

export default Relay.createContainer(ContainerVideos, {

  initialVariables: {
    pageNumber: 1
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        api_videos(pageNumber: $pageNumber) {
          video_id
          show_id
          name
          code
          video_type
        }
      }
    `
  },
});