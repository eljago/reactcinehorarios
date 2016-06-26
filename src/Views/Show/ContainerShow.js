'use strict';

import React, { PropTypes } from 'react';
import Relay from 'react-relay';

import ComponentShow from './ComponentShow';
import {
  getPhotoGalleryRoute,
  getShowCastRoute
} from '../../routes/navigatorRoutes'

class ContainerShow extends React.Component {

  static propTypes = {
    extraData: PropTypes.object,
    navigator: PropTypes.object
  };

  constructor(props) {
    super(props);
    props.relay.setVariables({
      show_id: props.extraData.show_id,
    });
  }

  render() {
    const show = this.props.viewer.api_show;
    
    if (!show) {
      return null;
    }
    return (
      <ComponentShow
        show={show}
        onPressCast={this._onPressCast.bind(this)}
        onPressImages={this._onPressImages.bind(this)}
      />
    );
  }

  _onPressImages() {
    const images = this.props.viewer.api_show.images;
    let showImagesRoute = getPhotoGalleryRoute(images);
    this.props.navigator.push(showImagesRoute);
  }

  _onPressCast() {
    const people = this.props.viewer.api_show.people;
    let showCastRoute = getShowCastRoute(people);
    this.props.navigator.push(showCastRoute);
  }
}

export default Relay.createContainer(ContainerShow, {

  initialVariables: {
    show_id: 0
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
         api_show(show_id: $show_id){
          show_id
          name
          name_original
          image_url
          information
          debut
          duration
          genres
          imdb_code
          imdb_score
          metacritic_url
          metacritic_score
          rotten_tomatoes_url
          rotten_tomatoes_score
          year
          rating
          videos{
            video_id
            name
            code
            image_url
          }
          images{
            image_id
            name
            image_url
            width
            height
          }
          portrait_image{
            image_id
            name
            image_url
            width
            height 
          }
          people{
            person_id
            actor
            character
            director
            image_url
            imdb_code
            name
          }
          has_functions
        }
      }
    `
  },
});