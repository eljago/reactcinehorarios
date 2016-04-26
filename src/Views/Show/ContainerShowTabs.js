'use strict';

import React, { PropTypes, StyleSheet } from 'react-native';
import Relay from 'react-relay'
import TabNavigator from 'react-native-tab-navigator';

import {colors} from '../../Data'
import ContainerShow from './ContainerShow';

class ContainerShowTabs extends React.Component {

  static propTypes = {
    extraData: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'info'
    };
    props.relay.setVariables({
      show_id: props.extraData.show_id,
    });
  }

	render() {
    if (!this.props.viewer.api_show) {
      return null;
    }

    const {
      show_id,
      name,
      name_original,
      image_url,
      information,
      debut,
      duration,
      genres,
      imdb_code,
      imdb_score,
      metacritic_url,
      metacritic_score,
      rotten_tomatoes_url,
      rotten_tomatoes_score,
      year,
      rating,
      portrait_image
    } = this.props.viewer.api_show;

    return (
    	<TabNavigator
        tabBarStyle={styles.tabBar}
      >
        <TabNavigator.Item
          selected={this.state.selectedTab === 'info'}
          onPress={() => this.setState({ selectedTab: 'info' })}
          renderIcon={() => <React.Text style={styles.icon}>Info</React.Text>}
          renderSelectedIcon={() => <React.Text style={styles.sIcon}>Info</React.Text>}
        >
          <ContainerShow
            navigator={navigator}
            show_id={show_id}
            name={name}
            name_original={name_original}
            image_url={image_url}
            information={information}
            debut={debut}
            duration={duration}
            genres={genres}
            imdb_code={imdb_code}
            imdb_score={imdb_score}
            metacritic_url={metacritic_url}
            metacritic_score={metacritic_score}
            rotten_tomatoes_url={rotten_tomatoes_url}
            rotten_tomatoes_score={rotten_tomatoes_score}
            year={year}
            rating={rating}
            portrait_image={portrait_image}
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

export default Relay.createContainer(ContainerShowTabs, {

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