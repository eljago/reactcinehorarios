'use strict';

import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  WebView,
  StyleSheet,
  Image
} from 'react-native';

import {colors} from '../../Data/Colors';
import getHtmlString from './html';

const WEBVIEW_REF = 'webview';

export default class ComponentVideosWebView extends React.Component {

  static propTypes = {
    videos: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.state = {
      url: 'http://cinehorarios.cl',
      status: 'No Page Loaded',
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      loading: true,
      scalesPageToFit: true,
    };
  }

  render() {
    return (
      <View style={[styles.container]}>
        <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{html: getHtmlString('Titulo', "Youtube", "4r6ice_lzto")}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
        <View style={[styles.addressBarRow]}>
          <TouchableOpacity
            onPress={this.goBack.bind(this)}
            style={styles.navButton}>
            <Image
              source={require('../../../assets/MenuBackIcon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.goForward.bind(this)}
            style={styles.navButton}>
            <Image
              style={{transform: [{rotate: '180deg'}]}}
              source={require('../../../assets/MenuBackIcon.png')}
            />
          </TouchableOpacity>
          <Text style={styles.statusBarText}>{this.state.status}</Text>
        </View>
      </View>
    );
  }

  goBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  goForward() {
    this.refs[WEBVIEW_REF].goForward();
  }

  reload() {
    this.refs[WEBVIEW_REF].reload();
  }

  onShouldStartLoadWithRequest(event) {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  }

  onNavigationStateChange(navState) {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
  }



}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tabBar,
  },
  addressBarRow: {
    flexDirection: 'row',
    height: 44,
    alignItems: 'center'
  },
  webView: {
    flex: 1
  },
  navButton: {
    width: 44,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarText: {
    color: 'white',
    fontSize: 13,
    marginLeft: 20
  }
});