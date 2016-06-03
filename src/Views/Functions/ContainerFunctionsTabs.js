'use strict';

import React, { PropTypes } from 'react';
import Relay from 'react-relay';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import ComponentTabBar from './ComponentTabBar';

import ContainerFunctions from './ContainerFunctions';

import {DateHelper} from '../../Utils';

class ContainerFunctionsTabs extends React.Component {

  static propTypes = {
    extraData: PropTypes.object
  };

  constructor(props) {
    super(props);

    const {start_date, theater_id} = props.extraData;
		const dates = DateHelper.getWeekDates(start_date);
    const {date1, date7} = dates;

    this.state = {
    	dates: dates
    };

    props.relay.setVariables({
      date_start: DateHelper.getFormattedDate(date1),
      date_end: DateHelper.getFormattedDate(date7),
      theater_id: theater_id
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.viewer.api_theater_shows.length == 0) {
      return false;
    }
    return true;
  }

	render() {
    return (
      <ScrollableTabView initialPage={0} renderTabBar={() => <ComponentTabBar />}>
        {this._getTabs()}
      </ScrollableTabView>
    );
  }

  _getTabs() {
    let {navigator, viewer} = this.props;
    const dates = this.state.dates;
    return Object.keys(dates).map((key) => {
      const date = dates[key];
      const dateString = DateHelper.getShortDateString(date);
      return(
        <ContainerFunctions
          key={dateString}
          tabLabel={dateString}
          date={date}
          dataRows={getDataRows(date, viewer.api_theater_shows)}
          navigator={navigator}
        />
      );
    });
  }
}

function getDataRows(date, theaterShows) {
  let dataRows = [];
  for(let index=0; index<theaterShows.length; index++){
    const {id, name, information, genres, image_url, functions, show_id} = theaterShows[index];

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
        functions: filteredFunctions,
        show_id: show_id
      });
    }
  }
  return dataRows;
};

export default Relay.createContainer(ContainerFunctionsTabs, {
  
  initialVariables: {
    date_start: DateHelper.getFormattedDate(new Date),
    date_end: DateHelper.getFormattedDate(new Date),
    theater_id: 0
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        api_theater_shows(date_start: $date_start, date_end: $date_end, theater_id: $theater_id){
          id
          name
          information
          genres
          image_url
          show_id
          functions{
            function_id
            date
            showtimes
            function_types
          }
        }
      }
    `
  },
});