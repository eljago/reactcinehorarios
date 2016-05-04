'use strict';

import React, { PropTypes, Text, StyleSheet } from 'react-native';
import Relay from 'react-relay'
import TabNavigator from 'react-native-tab-navigator';

import ContainerFunctions from './ContainerFunctions';

import {DateHelper} from '../../Utils'
import {colors} from '../../Data'


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
    	dates: dates,
      selectedTab: DateHelper.getShortDateString(date1)
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
    const {date1, date2, date3, date4, date5, date6, date7} = this.state.dates;

    const stringDate1 = DateHelper.getShortDateString(date1);
    const stringDate2 = DateHelper.getShortDateString(date2);
    const stringDate3 = DateHelper.getShortDateString(date3);
    const stringDate4 = DateHelper.getShortDateString(date4);
    const stringDate5 = DateHelper.getShortDateString(date5);
    const stringDate6 = DateHelper.getShortDateString(date6);
    const stringDate7 = DateHelper.getShortDateString(date7);

    let {navigator, viewer} = this.props;
    return (
    	<TabNavigator
        tabBarStyle={styles.tabBar}
      >
        <TabNavigator.Item
          selected={this.state.selectedTab === stringDate1}
          onPress={() => this.setState({ selectedTab: stringDate1 })}
          renderIcon={() => <Text style={styles.icon}>{stringDate1}</Text>}
          renderSelectedIcon={() => <Text style={styles.sIcon}>{stringDate1}</Text>}
        >
          <ContainerFunctions
            date={date1}
            dataRows={getDataRows(date1, viewer.api_theater_shows)}
            navigator={navigator}
          />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === stringDate2}
          onPress={() => this.setState({ selectedTab: stringDate2 })}
          renderIcon={() => <Text style={styles.icon}>{stringDate2}</Text>}
          renderSelectedIcon={() => <Text style={styles.sIcon}>{stringDate2}</Text>}
        >
          <ContainerFunctions
            date={date2}
            dataRows={getDataRows(date2, viewer.api_theater_shows)}
            navigator={navigator}
          />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === stringDate3}
          onPress={() => this.setState({ selectedTab: stringDate3 })}
          renderIcon={() => <Text style={styles.icon}>{stringDate3}</Text>}
          renderSelectedIcon={() => <Text style={styles.sIcon}>{stringDate3}</Text>}
        >
          <ContainerFunctions
            date={date3}
            dataRows={getDataRows(date3, viewer.api_theater_shows)}
            navigator={navigator}
          />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === stringDate4}
          onPress={() => this.setState({ selectedTab: stringDate4 })}
          renderIcon={() => <Text style={styles.icon}>{stringDate4}</Text>}
          renderSelectedIcon={() => <Text style={styles.sIcon}>{stringDate4}</Text>}
        >
          <ContainerFunctions
            date={date4}
            dataRows={getDataRows(date4, viewer.api_theater_shows)}
            navigator={navigator}
          />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === stringDate5}
          onPress={() => this.setState({ selectedTab: stringDate5 })}
          renderIcon={() => <Text style={styles.icon}>{stringDate5}</Text>}
          renderSelectedIcon={() => <Text style={styles.sIcon}>{stringDate5}</Text>}
        >
          <ContainerFunctions
            date={date5}
            dataRows={getDataRows(date5, viewer.api_theater_shows)}
            navigator={navigator}
          />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === stringDate6}
          onPress={() => this.setState({ selectedTab: stringDate6 })}
          renderIcon={() => <Text style={styles.icon}>{stringDate6}</Text>}
          renderSelectedIcon={() => <Text style={styles.sIcon}>{stringDate6}</Text>}
        >
          <ContainerFunctions
            date={date6}
            dataRows={getDataRows(date6, viewer.api_theater_shows)}
            navigator={navigator}
          />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === stringDate7}
          onPress={() => this.setState({ selectedTab: stringDate7 })}
          renderIcon={() => <Text style={styles.icon}>{stringDate7}</Text>}
          renderSelectedIcon={() => <Text style={styles.sIcon}>{stringDate7}</Text>}
        >
          <ContainerFunctions
            date={date7}
            dataRows={getDataRows(date7, viewer.api_theater_shows)}
            navigator={navigator}
          />
        </TabNavigator.Item>
			</TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: 'gray',
    marginBottom: -5
  },
  sIcon: {
    color: 'white',
    marginBottom: -5
  },
  tabBar: {
    backgroundColor: colors.tabBar
  }
});

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