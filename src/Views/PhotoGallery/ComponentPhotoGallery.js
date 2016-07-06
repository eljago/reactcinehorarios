'use strict'

import React, { PropTypes } from 'react'

import Gallery from 'react-native-gallery'

import { ImageHelper } from '../../Utils'

export default class ComponentPhotoGallery extends React.Component {

  static propTypes = {
  	navigator: PropTypes.object
  }

  render() {
    return (
      <Gallery
        style={{flex: 1, backgroundColor: 'black'}}
        images={this._getMedia()}
      />
    )
  }

  _getMedia() {
    return this.props.images.map((image) => {
      return(ImageHelper.addPrefixToPath(image.image_url, ''))
    })
  }
}