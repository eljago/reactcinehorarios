'use strict';

import React, { PropTypes } from 'react-native';

import FunctionsTabs from '../components/functionstabs';
import dateFunctions from '../Utils/dateFunctions';

export default class FunctionsTabsContainer extends React.Component{
  
  static propTypes = {
    extraData: PropTypes.object,
    navigator: PropTypes.object
  };
  static displayName = "FunctionsTabsContainer";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FunctionsTabs 
        navigator={this.props.navigator}
        theaterData={this.props.extraData.theaterData}
        dates={dateFunctions.getWeekDates()}/>
    );
  }

}