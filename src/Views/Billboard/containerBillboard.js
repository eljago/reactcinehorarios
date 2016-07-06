'use strict'

import React, { PropTypes } from 'react'
import Relay from 'react-relay'

import ComponentBillboard from './componentBillboard'
import {getShowRoute} from '../../routes/MyRoutes'

import Immutable from 'immutable'

class ContainerBillboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataRows: Immutable.fromJS(props.viewer ? props.viewer.api_billboard : []),
      showingScores: false
    }
  }

  render() {
    return (
      <ComponentBillboard
        onPress={this._onPress.bind(this)}
        dataRows={this.state.dataRows}
        onButtonPressed={this._onButtonPressed.bind(this)}
      />
    )
  }

  _onPress(rowData) {
    const showRoute = getShowRoute(rowData.get('show_id'))
    this.props.navigator.push(showRoute)
  }

  _onButtonPressed() {
    const newShowingScores = !this.state.showingScores;
    this.setState({
      showingScores: newShowingScores,
      dataRows: this.state.dataRows.map((dataRow) => {
        const newDataRow = dataRow.set('showingScores', newShowingScores)
        return newDataRow
      })
    })
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
          rating
          duration
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