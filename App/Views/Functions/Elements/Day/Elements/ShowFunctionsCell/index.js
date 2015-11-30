'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  TouchableHighlight,
  View,
} = React;

var styles = require('./style');

module.exports = React.createClass({

  render: function() {
    var colors = this.props.requires.colors;
    var data = this.props.rowData;
    var api = this.props.requires.api;
    var imageHelper = this.props.requires.imageHelper;
    var cellBackgroundColor = this.props.rowID % 2 == 0 ? 'white' : colors.silver;

    return(
      <TouchableHighlight
        underlayColor={colors.concrete}
        onPress={() => this.props.onPress(data)}>
        <View>
          <View style={[styles.rowContainer, {backgroundColor: cellBackgroundColor}]}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode='cover'
                style={styles.image}
                source={
                  {uri: api.getFullURL(imageHelper.getThumbImage(data.image_url))}
                }
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>
                {data.name}
              </Text>
              {this._getFunctionsViews(data.functions)}
            </View>
            <Image 
              style={styles.rightAccessoryView} 
              source={this.props.requires.rightAccesoryView}
            />
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  },

  _getFunctionsViews: function(functions) {
    return(
      functions.map((f, i) => {
        return(
          <View style={styles.functionView}>
            <Text style={styles.functionTypes}>
              {f.function_types.split(", ").join('   ')}
            </Text>
            <Text style={styles.showtimes}>
              {f.showtimes.split(", ").join(' ')}
            </Text>
          </View>
        );
      })
    );
  }
});
