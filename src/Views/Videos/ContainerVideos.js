'use strict';

import React, { PropTypes } from 'react';
import Relay from 'react-relay';

import ComponentVideos from './ComponentVideos';
import {getVideosWebView} from '../../routes/navigatorRoutes';

class ContainerVideos extends React.Component {

  constructor(props) {
    super(props);

    props.relay.setVariables({
      page: 1
    });
  }

  render() {
    const dataRows = this.props.viewer ? this.props.viewer.api_videos : [];

    return (
      <ComponentVideos 
        dataRows={dataRows}
        onPress={this._onPress.bind(this)}
        onPressShow={this._onPressShow.bind(this)}
      />
    );
  }

  _onPress(rowData) {
  }

  _onPressShow(rowData) {
    let videosWebViewRoute = getVideosWebView();
    this.props.navigator.push(videosWebViewRoute);
  }
}

export default Relay.createContainer(ContainerVideos, {

  initialVariables: {
    page: 1
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        api_videos(page: $page) {
          video_id
          name
          image_url
          code
          show{
            show_id
            name
            image_url
          }
        }
      }
    `
  },
});