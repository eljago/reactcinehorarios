'use strict';

var dateFunctions = require('./dateFunctions');
var options = {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Token token=1b5bbddf9158bf194656e22d18703e96',
      'APIV': 'application/cinehorarios.ios.v4'
    }
};
var apiURL = "cinehorarios.cl";
// var apiURL = "192.168.50.22:3000";

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(response.statusText);
}
function json(response) {
  return response.json();
}

function getFullURL(relativePath) {
  var addedString = relativePath[0] == '/' ? "" : "/";
  return `http://${apiURL}${addedString}${relativePath}`;
}

var api = {
  getFullURL: getFullURL,

	getTheaters: function(countryName) {
		var url = getFullURL(`api/theaters?country_name=${countryName}`);
		return fetch(url, options).then(status).then(json);
	},

  getFunctions: function(theater_id, date) {
    var dateString = dateFunctions.toYYYYMMDD(date);
    var url = getFullURL(`api/theaters/${theater_id}/functions?date=${dateString}`);
    return fetch(url, options).then(status).then(json);
  },

  getShow: function(showID) {
    var url = getFullURL(`api/shows/${showID}`);
    return fetch(url, options).then(status).then(json);
  },

  getVideos: function(page) {
    var url = getFullURL(`api/videos?page=${page}`);
    return fetch(url, options).then(status).then(json);
  },

  getBillboard: function() {
    var url = getFullURL(`api/shows/billboard`);
    return fetch(url, options).then(status).then(json);
  },

  getComingSoon: function() {
    var url = getFullURL(`api/shows/coming_soon`);
    return fetch(url, options).then(status).then(json);
  },

  getShowTheaters: function(showID) {
    var url = getFullURL(`api/shows/${showID}/theaters`);
    return fetch(url, options).then(status).then(json);
  }
};

module.exports = api;
