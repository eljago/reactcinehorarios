'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  TouchableHighlight,
  View,
} = React;

var imageHelper = require('../../../../Utils/ImageHelper');
var styles = require('./style');
var colors = require('../../../../Data/colors');

module.exports = React.createClass({

  render: function() {
    var data = this.props.data;
    var api = this.props.api;
    var cellBackgroundColor = this.props.rowID % 2 == 0 ? 'white' : colors.silver;

    return(
      <TouchableHighlight
      underlayColor={colors.concrete}
      onPress={() => this.props.onPress(data)}>
        <View>
          <View style={[styles.rowContainer, {backgroundColor: cellBackgroundColor}]}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode='contain'
                style={styles.image}
                source={
                  {uri: api.getFullURL(imageHelper.getThumbImage(data.image_url))}
                }/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>
                {data.name}
              </Text>
              {this._getFunctionsViews(data.functions)}
            </View>
            <Image 
              style={styles.rightAccessoryView} 
              source={require('../../../../Images/RightAccesoryView.png')}/>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  },

  _getFunctionsViews: function(functions) {
    console.log(functions);
    return(
      functions.map((f, i) => {
        return(
          <View style={{marginTop: 5}}>
            <Text style={styles.functionTypes}>
              {f.function_types.split(", ").join('   ')}
            </Text>
            <Text style={styles.showtimes}>
              {f.showtimes.split(", ").join('   ')}
            </Text>
          </View>
        );
      })
    );
  }
});
