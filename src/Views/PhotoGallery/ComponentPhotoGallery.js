'use strict'

import React, { PropTypes } from 'react'

import PhotoBrowser from 'react-native-photo-browser'

import { ImageHelper } from '../../Utils'

export default class ComponentPhotoGallery extends React.Component {

  static propTypes = {
  	navigator: PropTypes.object
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
        startOnGrid={true}
        enableGrid={true}
      />
    )
  }

  _getMedia() {
    return this.props.images.map((image) => {
      return({
        thumb: ImageHelper.addPrefixToPath(image.image_url, 'smaller_'),
        photo: ImageHelper.addPrefixToPath(image.image_url),
        caption: ' ',
        selected: false
      })
    })
  }
}