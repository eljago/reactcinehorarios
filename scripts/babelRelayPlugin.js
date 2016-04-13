'use strict';

var getBabelRelayPlugin   = require('babel-relay-plugin');

const json = require('./schema.json');

module.exports = getBabelRelayPlugin(json.data);