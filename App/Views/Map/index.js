'use strict';

var React = require('react-native');
var {
  MapView,
  StyleSheet
} = React;

var api = require('../../Utils/api');
var cinemas = require('../../Data/cinemas');


var rad2deg = function(radians) {
  return radians * (180/Math.PI);
};
var deg2rad = function(degrees) {
  return degrees * (Math.PI/180);
};

var MapPage = React.createClass({
  watchID: (null: ?number),

	componentDidMount: function() {
		this._fetchData();
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => this.setState({initialPosition}),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
      console.log(lastPosition);
      this.setState({
        lastPosition: lastPosition,
        mapRegion: {
          latitude: lastPosition.coords.latitude,
          longitude: lastPosition.coords.longitude,
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta: this.state.longitudeDelta
        },
      });
      navigator.geolocation.clearWatch(this.watchID);
    });
	},
  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  getInitialState: function() {
    var latitude = -33.4378439;
    var longitude = -70.6526736;
    var earthRadius = 6371;
    var radiusInKM = 7;
    var radiusInRad = radiusInKM / earthRadius;
    var aspectRatio = 1;
    var latitudeDelta = aspectRatio * rad2deg(radiusInRad);
    var longitudeDelta = rad2deg(radiusInRad / Math.cos(deg2rad(latitude)));

    return {
    	annotations: [],
    	mapRegion: {
    		latitude: latitude,
        longitude: longitude,
    		latitudeDelta: latitudeDelta,
    		longitudeDelta: longitudeDelta
    	},
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  },

  render: function() {
    return (
      <MapView 
      	style={styles.map}
        showsUserLocation={false}
      	annotations={this.state.annotations}
      	region={this.state.mapRegion || undefined}
        onRegionChange={this._onRegionChange}/>
    );
  },

  _fetchData: function() {
    api.getTheaters('Chile').then(json => {
      this._handleResponse(json);
    }).catch(error => {

    });
  },

  _onRegionChange: function(region) {

  },

  _handleResponse: function(json) {

    if (json && json.theaters.length > 0) {

      var annotations = [];
      var cinemasData = {};

      for (var i in cinemas) {
        var cinema = cinemas[i];
        cinemasData[cinema.id] = cinema;
      }

    	for (var i in json.theaters) {
	  		var theater = json.theaters[i];
	  		annotations.push({
	  			latitude: Number(theater.latitude),
	  			longitude: Number(theater.longitude),
	  			title: theater.name,
	  			subtitle: cinemasData[theater.cinema_id].name,
	  			animateDrop: false,
          hasRightCallout: true,
          onRightCalloutPress: this._onRightCalloutPress
	  		});
	  	}
      this.setState({
        annotations: annotations
      });
    }
    else {

    }
  },

  _onRightCalloutPress: function(weirdData) {

  }

});

var styles = StyleSheet.create({
	map: {
    flex: 1
	}
});

module.exports = MapPage;