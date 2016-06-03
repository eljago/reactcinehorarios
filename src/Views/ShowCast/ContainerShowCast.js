'use strict'

import React, {PropTypes} from 'react';

import ComponentShowCast from './ComponentShowCast';

export default class ContainerShowCast extends React.Component {

	static propTypes = {
		extraData: PropTypes.object
	};

	constructor(props) {
		super(props);
	}

	render() {
		const cast = this.props.extraData ? this.props.extraData.cast : [];

		return(
			<ComponentShowCast 
				cast={cast}
			/>
		);
	}
}