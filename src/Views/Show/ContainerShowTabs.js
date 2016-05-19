'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import Relay from 'react-relay'

import TabNavigator from 'react-native-tab-navigator';
import PhotoBrowser from 'react-native-photo-browser';

import {colors} from '../../Data';
import {ImageHelper} from '../../Utils';
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
    const show = this.props.viewer.api_show;
    
    if (!show) {
      return null;
    }


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
            show={show}
          />
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'photos'}
          onPress={() => this.setState({ selectedTab: 'photos' })}
          renderIcon={() => <React.Text style={styles.icon}>Photos</React.Text>}
          renderSelectedIcon={() => <React.Text style={styles.sIcon}>Photos</React.Text>}
        >
          <PhotoBrowser
            mediaList={this._getPhotoViewerMedia(show.images)}
            initialIndex={0}
            displayNavArrows={true}
            displaySelectionButtons={false}
            displayActionButton={false}
            startOnGrid={true}
            enableGrid={true}
            onSelectionChanged={(media, index, selected) => {
              console.log(`${media.photo} selection status: ${selected}`);
            }}
            onActionButton={(media, index) => {
              console.log(`action button pressed for ${media.photo}, index: ${index}`);
            }}
          />
        </TabNavigator.Item>

			</TabNavigator>
    );
  }

  _getPhotoViewerMedia(images) {
    return images.map((image) => {
      return({
        thumb: ImageHelper.addPrefixToPath(image.image_url, 'smaller_'),
        photo: ImageHelper.addPrefixToPath(image.image_url),
        caption: '',
        selected: false
      });
    });
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