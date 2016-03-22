'use strict';

import Relay from 'react-relay'

export class HomeQueryConfig extends Relay.Route {
  static routeName = 'HomeQueryConfig';
  static queries = {
    viewer: (Component) => Relay.QL`
  		query {
  			viewer {
  				${Component.getFragment('viewer')}
  			}
  		}
  	`
  };
}

export class CinemasQueryConfig extends Relay.Route {
  static routeName = 'CinemasQueryConfig';
  static queries = {
    cinemas: (Component) => Relay.QL`
  		query {
		    cinemas {
		      edges {
		        node {
		          name
		          image
		        }
		      }
		    }
  		}
  	`
  };
}