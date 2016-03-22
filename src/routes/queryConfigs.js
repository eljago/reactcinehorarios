'use strict';

import Relay from 'react-relay'

export class ViewerQueryConfig extends Relay.Route {
  static routeName = 'ViewerQueryConfig';
  static queries = {
    viewer: () => Relay.QL`
    	query Query {
    		viewer
    	}
    `
  };
}