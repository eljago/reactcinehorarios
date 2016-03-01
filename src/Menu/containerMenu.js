'use strict';

import React, { PropTypes } from 'react-native'

import Menu from './componentMenu'

export default class ContainerMenu extends React.Component {
  contextTypes: {
    menuActions: PropTypes.object
  };

  static propTypes = {
    navigator: PropTypes.object
  };
  static displayName = "ContainerCinemas";

  render() {
    return ( <Menu /> );
  }

  _renderRow(rowData, sectionID, rowID) {
  	return <MenuCell onPress={this._onPress}/>
  }

  _onPress(routeData) {
    helper.closeMenu();
    helper.getNavigator().resetTo(routeData);
  }
};
