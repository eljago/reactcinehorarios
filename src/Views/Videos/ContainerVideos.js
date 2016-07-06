'use strict';

import React, { PropTypes } from 'react';
import Relay from 'react-relay';

import Immutable from 'immutable';

import ComponentVideos from './ComponentVideos';
import {getVideosWebViewRoute} from '../../routes/MyRoutes';

class ContainerVideos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataRows: Immutable.fromJS(props.viewer ? props.viewer.api_videos : []),
      showingScores: false
    }
    props.relay.setVariables({
      page: 1
    });
  }
  render() {
    return (
      <ComponentVideos 
        onPress={this._onPress.bind(this)}
        onPressShow={this._onPressShow.bind(this)}
        dataRows={this.state.dataRows}
      />
    );
  }

  _onPress(rowData) {
    
  }

  _onPressShow(rowData) {
    let videosWebViewRoute = getVideosWebViewRoute();
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