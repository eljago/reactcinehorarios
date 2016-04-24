'use strict';

import React, { PropTypes } from 'react-native';
import Relay from 'react-relay';

import ComponentFunctions from './ComponentFunctions';
import {getShowRoute} from '../../routes/navigatorRoutes'
import {DateHelper} from '../../Utils'

require('../../Utils/ArrayExtension');

export default class ContainerFunctions extends React.Component {

  static propTypes = {
    date: PropTypes.object,
    theaterShows: PropTypes.array
  };

  constructor(props){
    super(props);

    const dataRows = getDataRows(props.date, props.theaterShows);
    this.state = {dataRows: dataRows};
  }

  render() {
    return (
      <ComponentFunctions 
        onPress={this._onPress.bind(this)}
        dataRows={this.state.dataRows}
      />
    );
  }

  _onPress(rowData) {
    let showRoute = getShowRoute(rowData.show_id, rowData.name);
    this.props.navigator.push(showRoute);
  }

  componentWillReceiveProps(nextProps){
    const dataRows = getDataRows(nextProps.date, nextProps.theaterShows);
    this.setState({dataRows: dataRows});
  }
}

function getDataRows(date, theaterShows) {
  let dataRows = [];
  for(let index=0; index<theaterShows.length; index++){
    const {id, name, information, genres, image_url, functions} = theaterShows[index];

    const filteredFunctions = functions.filter((obj) => {
      const dateArray1 = obj.date.split("-").map((string) => {
        return parseInt(string);
      });
      const dateArray2 = DateHelper.getFormattedDate(date).split("-").map((string) => {
        return parseInt(string);
      });
      return (dateArray1.equals(dateArray2));
    });

    if (filteredFunctions.length > 0) {
      dataRows.push({
        id: id,
        name: name,
        information: information,
        genres: genres,
        image_url: image_url,
        functions: filteredFunctions
      });
    }
  }
  return dataRows;
};
