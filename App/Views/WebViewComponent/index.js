var React = require('react-native');
var { StyleSheet } = React;

var WebViewAndroid = require('react-native-webview-android');

module.exports = React.createClass({

  onNavigationStateChange: function(event) {

  },
  render: function() {
    var props = {
      ref: "webViewAndroidSample",
      javaScriptEnabled: true,
      geolocationEnabled: false,
      builtInZoomControls: false,
      onNavigationStateChange: this.onNavigationStateChange,
      style: styles.containerWebView
    }
    if (this.props.extraData.url) {
      props.url = this.props.extraData.url;
    }
    else if (this.props.extraData.html) {
      props.html = this.props.extraData.html;
    }
    else {
      props.html = "<html></html>"
    }
    return (
      <WebViewAndroid {...props}/>
    );
  }
});

var styles = StyleSheet.create({
    containerWebView: {
        flex: 1,
    }
});