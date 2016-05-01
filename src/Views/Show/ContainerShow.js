'use strict';

import React, { PropTypes } from 'react-native';
import Relay from 'react-relay';

import ComponentShow from './ComponentShow';

export default class ContainerShow extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    show: PropTypes.object.isRequired
  };

  render() {
    return (
      <ComponentShow
        show={this.props.show}
      />
    );
  }
}
