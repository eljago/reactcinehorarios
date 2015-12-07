'use strict';

var React = require('react-native');
var {
  Image,
  View,
  Text,
  ListView,
  Platform,
  AsyncStorage
} = React;

var imageHelper = require('../../../../Utils/ImageHelper');
var colors = global.colors;
var api = global.api;

var styles = require('./style');
var cinemas = require('../../../../Data/cinemas');
var CinemaCell = require('./Elements/CinemaCell');
var Favorites = require('../../../../Utils/Favorites');

module.exports = React.createClass({

	componentWillMount: function() {
		if (this.props.show) {
	    this._fetchData(this.props.show.id);
		};
	},

  getInitialState: function() {
    var dataSource = this._getNewDataSource();
    return {
      dataSource: dataSource
    };
  },

	render: function() {
		return(
			<ListView
			    style={styles.container}
			    dataSource={this.state.dataSource}
			    renderRow={this._renderRow}
      			renderSectionHeader={this._renderSectionHeader}/>
		);
	},

	_renderRow: function(rowData, sectionID, rowID) {
		if (sectionID == 0) {
			return(
				<CinemaCell rowID={rowID} data={rowData}/>
			);
		}
		else if (sectionID == 1) {
			return(
				<CinemaCell rowID={rowID} data={rowData}/>
			);
		}
	},
  _renderSectionHeader: function(sectionData, sectionID) {
    return(
      <View style={styles.sectionHeaderView}>
        <Text style={styles.sectionText}>{sectionData}</Text>
      </View>
    );
  },

	_fetchData: function(showID) {
    api.getShowTheaters(showID).then(json => {
      this._handleResponse(json);
    }).catch(error => {
    	
    });
  },

  _handleResponse: function(json) {
  	this._getDataSourceData(json).then((dsd) => {
	    this.setState({
	      dataSource: this.state.dataSource.cloneWithRowsAndSections(dsd.dataBlob, dsd.sectionIDs, dsd.rowIDs),
	    });
  	})
  },

  _getDataSourceData: function(json) {
  	return Favorites.load().then((favorites) => {
	  	var dataBlob = {};
	  	var sectionIDs = [0, 1];
	    var rowIDs = [[],[]];
	    dataBlob[0] = "Favoritos";
    	dataBlob[1] = "Cines";

    	var idx = 0;
  		Object.keys(favorites).forEach((key) => {
  			var favTheater = favorites[key];
  			favTheater.rowNumber = idx++;
	    	dataBlob[`0:${favTheater.id}`] = favTheater;
	    	rowIDs[0].push(favTheater.id);
  		})

	    if (json.theaters && json.theaters.length > 0) {
		  	var cinemasData = cinemas,
		  			i, 
		  			length = cinemas.length,
		  			cinema;
		  			
		  	for (i = 0; i < length; i++) {
		  		cinema = cinemasData[i];
		  		cinema.rowNumber = i;
		  		cinema.theaters = json.theaters.filter(theater => {
		  			if (theater.cinema_id == cinema.id) {
		  				return theater;
		  			}
		  		});
		  		dataBlob[`1:${cinema.id}`] = cinema;
		  		rowIDs[1].push(cinema.id);
		  	}
		  	return {dataBlob: dataBlob, sectionIDs: sectionIDs, rowIDs: rowIDs};
	    }
	    else {
	    	return {dataBlob: {}, sectionIDs: [], rowIDs: []};
	    }
  	});
  },

  _getNewDataSource: function() {
    var getSectionData = (dataBlob, sectionID) => {
        return dataBlob[sectionID];
    };
    var getRowData = (dataBlob, sectionID, rowID) => {
        return dataBlob[`${sectionID}:${rowID}`];
    };
    var dataSource = new ListView.DataSource({
      getSectionData: getSectionData,
      getRowData: getRowData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    return dataSource;
  },
});