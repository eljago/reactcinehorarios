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

var WebViewComponent = require('../WebViewComponent');
var webpage = require('./webpage');

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

  onNavigationStateChange: function(event) {
    console.log(event);
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


          <TouchableHighlight
            underlayColor={colors.concrete}
            onPress={() => this._goVideo(rowData) }>
            <Image
              resizeMode='cover'
              style={styles.portraitImage}
              source={{uri: api.getFullURL(imageHelper.getThumbImage(rowData.show.portrait_image))}}/>
          </TouchableHighlight>

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
      title: rowData.name,
      component: WebViewComponent,
      extraData: {html: webpage.getHtml(rowData.show.name, rowData.name, rowData.code)}
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
