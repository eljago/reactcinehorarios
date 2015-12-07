'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Modal,
  ListView,
  Dimensions
} = React;

var GridView = require('react-native-grid-view');
var colors = global.colors;
var imageHelper = require('../../Utils/ImageHelper');
var PhotoBrowser = require('./PhotoBrowser');

var ShowMedia = React.createClass({

  componentDidMount: function() {
    var show = this.props.getShow();
    if (show) {
      this.setState({
        show: show,
        dataSource: this.state.dataSource.cloneWithRows(show.images)
      });
    }
  },
  getInitialState: function() {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      show: null,
      animated: true,
      modalVisible: false,
      transparent: false,
      dataSource: dataSource
    };
  },

  receivedShow: function(show) {
    this.setState({
      show: show,
      dataSource: this.state.dataSource.cloneWithRows(show.images)
    });
  },

  render: function() {
    var show = this.state.show;
    if (show) {
      return(
        <View>
          <GridView
            style={styles.gridView}
            items={show.images}
            itemsPerRow={3}
            renderItem={this._renderRow}/>
          <Modal
            animated={this.state.animated}
            transparent={this.state.transparent}
            visible={this.state.modalVisible}>
            <View style={styles.container}>
              <PhotoBrowser
                api={this.props.api}
                />
            </View>
          </Modal>
        </View>
      );
    }
    else {
      return(
        <View style={styles.container}/>
      );
    }
  },

  _renderRow: function(rowData) {
    return(
      <View style={styles.imageView}>
        <TouchableHighlight
          style={{}}
          underlayColor={colors.concrete}
          onPress={() => this._pressRow(rowData)}>
          <Image
            source={{uri: this.props.api.getFullURL(imageHelper.getThumbImage(rowData.image_url))}}
            style={styles.image}/>
        </TouchableHighlight>
      </View>
    );
  },

  _pressRow: function(rowData) {
    this.setState({modalVisible: true})
  },

});

const SPACING = 8;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  gridView: {
    flex: 1,
    backgroundColor: 'black',
    marginLeft: -7,
    marginTop: 20,
    padding: SPACING,
  },
  imageView: {
    height: 140,
    flex: 1,
    marginLeft: SPACING,
  },
  image: {
    height: 133
  }
});

module.exports = ShowMedia;
