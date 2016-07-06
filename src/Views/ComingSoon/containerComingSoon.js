'use strict'

import React, { PropTypes } from 'react'
import Relay from 'react-relay'

import Immutable from 'immutable'

import ComponentComingSoon from './componentComingSoon'
import {getShowRoute} from '../../routes/MyRoutes'

class ContainerComingSoon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataRows: Immutable.fromJS(props.viewer ? props.viewer.api_coming_soon : []),
      showingScores: false
    }
  }

  render() {
    return (
      <ComponentComingSoon
        onPress={this._onPress.bind(this)}
        dataRows={this.state.dataRows}
      />
    );
  }

  _onPress(rowData) {
    const showRoute = getShowRoute(rowData.get('show_id'))
    this.props.navigator.push(showRoute)
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
          imdb_code
          imdb_score
          metacritic_url
          metacritic_score
          rotten_tomatoes_url
          rotten_tomatoes_score
        }
      }
    `
  },
})