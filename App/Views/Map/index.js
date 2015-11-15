'use strict';

var React = require('react-native');
var {
  MapView,
  StyleSheet
} = React;

var api = require('../../Utils/api');

var MapPage = React.createClass({

	componentDidMount: function() {
		this._fetchData();
	},

  getInitialState: function() {
    return {
    	annotations: [],
    	mapRegion: {
    		latitude: 0,
    		longitude: 0,
    		latitudeDelta: 20,
    		longitudeDelta: 20
    	}
    };
  },

  render: function() {
    return (
      <MapView 
      	showsUserLocation={true}
      	style={styles.map}
      	annotations={this.state.annotations}
      	region={this.state.mapRegion || undefined}/>
    );
  },

   _fetchData: function() {
    api.getTheaters('Chile').then(json => {
      this._handleResponse(json);
    }).catch(error => {

    });
  },

  _handleResponse: function(json) {
    if (json.theaters && json.theaters.length > 0) {
    	var annotations = [];
    	for (var i in json.theaters) {
	  		var theater = json.theaters[i];
	  		annotations.push({
	  			latitude: Number(theater.latitude),
	  			longitude: Number(theater.longitude),
	  			title: theater.name,
	  			subtitle: theater.address,
	  			animateDrop: true,
	  			hasRightCallout: true
	  		});
        // [{latitude: number, longitude: number, animateDrop: bool, title: string, subtitle: string, hasLeftCallout: bool, hasRightCallout: bool, onLeftCalloutPress: function, onRightCalloutPress: function, id: string}] 
	  	}
      this.setState({
        annotations: annotations
      });
    }
    else {

    }
  }

});

var styles = StyleSheet.create({
	map: {
    flex: 1
	}
});

module.exports = MapPage;