'use strict';

import React, { PropTypes } from 'react';

import PhotoBrowser from 'react-native-photo-browser';

import { ImageHelper } from '../../Utils';

export default class ComponentImages extends React.Component {

  static propTypes = {
  	navigator: PropTypes.object,
    extraData: PropTypes.object
  };
  static defaultProps = {
  	images: []
  }

  render() {
    return (
			<PhotoBrowser
        onBack={this.props.navigator.pop}
        mediaList={this._getMedia()}
        initialIndex={0}
        displayNavArrows={true}
        displaySelectionButtons={false}
        displayActionButton={false}
        startOnGrid={false}
        enableGrid={true}
      />
    );
  }

  _getMedia() {
    return this.props.extraData.images.map((image) => {
      return({
        thumb: ImageHelper.addPrefixToPath(image.image_url, 'smaller_'),
        photo: ImageHelper.addPrefixToPath(image.image_url),
        caption: '',
        selected: false
      });
    });
  }
}