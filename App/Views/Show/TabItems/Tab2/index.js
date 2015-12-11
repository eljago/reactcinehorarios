'use strict';

var React = require('react-native');
var {
  Image,
  View,
  Text,
  ListView,
  Platform
} = React;

var imageHelper = require('../../../../Utils/ImageHelper');

var styles = require('./style');
var PersonCell = require('./Elements/PersonCell');

module.exports = React.createClass({

  componentWillReceiveProps: function(nextProps){
    if (nextProps.show && nextProps.show.people && nextProps.show.people.length > 0) {
      var dsd = this._getDataSourceData(nextProps.show.people);
      var dataSource = null;
      if (this.state.dataSource) {
        dataSource = this.state.dataSource
      }
      else {
        dataSource = this._getNewDataSource();
      }

      this.setState({
        dataSource: dataSource.cloneWithRowsAndSections(dsd.dataBlob, dsd.sectionIDs, dsd.rowIDs),
      });
    }
	},

  getInitialState: function() {
    var dataSource = this._getNewDataSource();
    var newState = {};
    if (this.props.show && this.props.show.people && this.props.show.people.length > 0) {
      var dsd = this._getDataSourceData(this.props.show.people);
      newState.dataSource = dataSource.cloneWithRowsAndSections(dsd.dataBlob, dsd.sectionIDs, dsd.rowIDs);
    }
    else {
      newState.dataSource = dataSource;
    }
  	return newState;
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

  _renderRow: function(rowData) {
  	return(
  		<PersonCell data={rowData}/>
  	);
  },
  _renderSectionHeader: function(sectionData) {
    return(
      <View style={styles.sectionHeaderView}>
        <Text style={styles.sectionText}>{sectionData}</Text>
      </View>
    );
  },

  _getDataSourceData: function(people) {
    var length = people.length;
    var dataBlob = {};
    var sectionIDs = [0, 1];
    var rowIDs = [[],[]];
    var person;
    var i;
    var directorCount = 0;
    var actorCount = 0;

    for (i = 0; i < length; i++) {
      person = people[i];
      if (person.director || person.actor) {
        if (person.director) {
          rowIDs[0].push(person.id);
          person.rowNumber = directorCount;
          directorCount++;
        }
        if (person.actor) {
          rowIDs[1].push(person.id);
          person.rowNumber = actorCount;
          actorCount++;
        }
        if (dataBlob[person.id] == null) {
          dataBlob[person.id] = person;
        }
      }
    }
    dataBlob[0] = rowIDs[0].length > 1 ? "Directores" : "Director";
    dataBlob[1] = rowIDs[1].length > 1 ? "Actores" : "Actor";
    return {dataBlob: dataBlob, sectionIDs: sectionIDs, rowIDs: rowIDs};
  },

  _getNewDataSource: function() {
    var getSectionData = (dataBlob, sectionID) => {
        return dataBlob[sectionID];
    };
    var getRowData = (dataBlob, sectionID, rowID) => {
        return dataBlob[rowID];
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