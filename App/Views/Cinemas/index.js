'use strict';

var React = require('react-native');
var {
  Image,
  ScrollView,
  TouchableHighlight,
  ListView,
  Text
} = React;

var TheatersView = require('../Theaters');
var styles = require('./style');
var CinemaCell = require('./Elements/CinemaCell');

var Cinemas = React.createClass({

  getInitialState: function() {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var cinemasArray = require('../../Data/cinemas');
    return {
      dataSource: dataSource.cloneWithRows(cinemasArray),
    };
  },

  render: function() {
    return (
      <ScrollView style={styles.container}>
        <CinemaCell
          data={{id: 1, name: 'Cinemark'}}
          source={require('./Images/Cinemark.png')}
          onPress={this._pressRow}
          background={0}/>
        <CinemaCell
          data={{id: 2, name: 'Hoyts Santiago'}}
          source={require('./Images/Hoyts.png')}
          onPress={this._pressRow}
          background={1}/>
        <CinemaCell
          data={{id: 4, name: 'Hoyts Regiones'}}
          source={require('./Images/Hoyts.png')}
          onPress={this._pressRow}
          background={0}/>
        <CinemaCell
          data={{id: 3, name: 'Cineplanet'}}
          source={require('./Images/Cineplanet.png')}
          onPress={this._pressRow}
          background={1}/>
        <CinemaCell
          data={{id: 6, name: 'Pavilion'}}
          source={require('./Images/CineStar.png')}
          onPress={this._pressRow}
          background={0}/>
        <CinemaCell
          data={{id: 6, name: 'Pavilion'}}
          source={require('./Images/CineStar.png')}
          onPress={this._pressRow}
          background={1}/>
      </ScrollView>
    );
  },

  _pressRow: function(rowData) {
    this.props.navigator.push({
      title: rowData.name,
      component: TheatersView,
      extraData: {cinemaData: rowData}
    });
  }

});

module.exports = Cinemas;
