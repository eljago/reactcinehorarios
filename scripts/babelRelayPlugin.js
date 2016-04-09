'use strict';

// inside that file
var getBabelRelayPlugin   = require('babel-relay-plugin');
var request            = require('sync-request');

var introspectionQueryString = require('./introspectionQuery');
var config = require('../config');

function status(response) {
  if (response.status == 200) {
    return response;
  }
  throw new Error(response.statusText);
};

var response = request('POST', config.graphqlURL, {
	headers: config.headers,
  qs: {
    query: introspectionQueryString
  }
});

var schema = JSON.parse(response.body.toString('utf-8'));

module.exports = getBabelRelayPlugin(schema.data, {
  abortOnError: true,
});