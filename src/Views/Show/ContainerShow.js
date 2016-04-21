'use strict';

import React, { PropTypes } from 'react-native'
import Relay from 'react-relay'

import ComponentShow from './ComponentShow'

class ContainerTheaters extends React.Component {

  constructor(props) {
    super(props);

    this.props.relay.setVariables({
      show_id: props.extraData.show_id,
    });
  }

  render() {
    const show = this.props.viewer ? this.props.viewer.api_show : null;

    return (
      <ComponentShow
        onPress={this._onPress.bind(this)}
        show={show}
      />
    );
  }
}

export default Relay.createContainer(ContainerTheaters, {

  initialVariables: {
    show_id: 0
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
         api_show(show_id: $show_id){
          show_id
          name
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