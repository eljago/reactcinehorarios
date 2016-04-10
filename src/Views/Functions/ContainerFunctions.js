'use strict';

import React, { PropTypes } from 'react-native';
import Relay from 'react-relay';

import ComponentFunctions from './ComponentFunctions';

class ContainerFunctions extends React.Component {

  static propTypes = {
    date: PropTypes.string,
    theater_id: PropTypes.number,
  };

  constructor(props) {
    super(props);

    const {date,theater_id} = this.props.extraData;
    this.props.relay.setVariables({
      date: date,
      theater_id: theater_id
    });
  }

  render() {
    const api_theater_show = this.props.viewer.api_theater_shows;
    const dataRows = api_theater_show ? api_theater_show : [];

    return (
      <ComponentFunctions 
        onPress={this._onPress.bind(this)}
        dataRows={dataRows}
      />
    );
  }

  _onPress(functionNode) {

  }

}

export default Relay.createContainer(ContainerFunctions, {
  
  initialVariables: {
    date: getFormattedDate(),
    theater_id: 0
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        api_theater_shows(date: $date, theater_id: $theater_id){
          id
          name
          information
          genres
          image_url
          functions{
            date
            showtimes
            function_types
          }
        }
      }
    `
  },
});

function getFormattedDate() {
    let date = new Date();
    let formattedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return formattedDate;
}