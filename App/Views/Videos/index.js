'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component,
  ScrollView
} = React;

var api = require('../../Utils/api');
var colors = require('../../Data/colors');
var dateFunctions = require('../../Utils/dateFunctions');
var imageHelper = require('../../Utils/ImageHelper');
var ShowView = require('../Show');
var YouTube = require('react-native-youtube');

var pageIndex = 1;

var styles = require('./style');

var VideosPage = React.createClass({

  getInitialState: function() {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      videos: [],
      dataSource: dataSource
    };
  },

  componentDidMount: function() {
    this._fetchData();
  },

  render: function() {
    return (
      <ListView
       style={styles.container}
       dataSource={this.state.dataSource}
       renderRow={this._renderRow}/>
    );
  },

  _renderRow: function(rowData, sectionID, rowID) {
    return (
      <View>
        <View style={styles.rowContainer}>

          <TouchableHighlight
          underlayColor={colors.concrete}
          onPress={() => this._goShow(rowData) }>
            <Image
            source={{uri: api.getFullURL(imageHelper.getThumbImage(rowData.show.image_url))}}
            style={styles.showImage}/>
          </TouchableHighlight>


          <YouTube
            videoId={rowData.code} // The YouTube video ID
            play={false}           // control playback of video with true/false
            hidden={false}         // control visiblity of the entire view
            playsInline={false}     // control whether the video should play inline

            onReady={(e)=>{this.setState({isReady: true})}}
            onChangeState={(e)=>{this.setState({status: e.state})}}
            onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
            onError={(e)=>{this.setState({error: e.error})}}

            style={{backgroundColor: 'black', flex: 1}}/>

        </View>
        <View style={styles.separator} />
      </View>
    );
  },

  _goShow: function(rowData) {
    this.props.navigator.push({
      title: rowData.show.name,
      component: ShowView,
      extraData: {showData: rowData.show}
    });
  },
  _goVideo: function(rowData) {
    this.props.navigator.push({
      title: rowData.show.name,
      component: ShowView,
      passProps: {showData: rowData.show}
    });
  },

  _fetchData: function() {
    var date = new Date();
    api.getVideos(pageIndex).then(json => {
      this._handleResponse(json);
    }).catch(error => {

    });
  },

  _handleResponse: function(json) {
    if (json.videos && json.videos.length > 0) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(json.videos),
        videos: json.videos
      });
    }
    else {

    }
  }
});

module.exports = VideosPage;
