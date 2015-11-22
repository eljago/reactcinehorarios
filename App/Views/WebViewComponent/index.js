var React = require('react-native');
var React = require('react-native');
var {
  View
} = React;

var WebViewAndroid = require('react-native-webview-android');
var styles = require('./style');

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
      style: styles.webView
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
      <View style={styles.container}>
        <WebViewAndroid {...props}/>
        <View style={styles.bottomBar}>

        </View>
      </View>
    );
  }
});