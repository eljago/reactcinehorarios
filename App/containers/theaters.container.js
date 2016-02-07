'use strict';

import React, { PropTypes } from 'react-native';

import Theaters from '../components/theaters/theaters';
import FunctionsTabsContainer from './functionstabs.container';
import Favorites from '../Utils/Favorites';

import api from '../Utils/api';

const COUNTRYNAME = 'Chile';

export default class TheatersContainer extends React.Component {
  
  static propTypes = {
    navigator: PropTypes.object,
    extraData: PropTypes.object
  };
  static displayName = "TheatersContainer";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Theaters
        onPress={this._onPress.bind(this)}
        onFetch={this._onFetch.bind(this)}
      />
    );
  }

  _onPress(rowData) {
    this.props.navigator.push({
      title: rowData.name,
      component: FunctionsTabsContainer,
      extraData: {theaterData: rowData},
      routeName: 'Functions'
    });
    Favorites.add(rowData.id, rowData.name);
  }

  _onFetch(page = 1, callback, options) {
    api.getTheaters(COUNTRYNAME).then(json => {
      this._handleResponse(json, callback);
    }).catch(error => {
      callback();
    });
  }

  _handleResponse(json, callback) {
    if (json.theaters && json.theaters.length > 0) {
      let theaters = json.theaters.filter(theater => {
        if(theater.cinema_id == this.props.extraData.cinemaData.id) {
          return theater;
        }
      });
      callback(theaters);
    }
    else {
      callback();
    }
  }
}
