'use strict';

let React = require('react-native');
let {
 Image,
 PixelRatio,
 PropTypes,
} = React;

class ResponsiveImage extends React.Component {

  static getClosestHighQualitySource(sources) {
    let pixelRatios = Object.keys(sources);
    if (!pixelRatios.length) {
      return null;
    }

    pixelRatios.sort((ratioA, ratioB) =>
      parseFloat(ratioA) - parseFloat(ratioB)
    );
    for (let ii = 0; ii < pixelRatios.length; ii++) {
      if (pixelRatios[ii] >= PixelRatio.get()) {
        return sources[pixelRatios[ii]];
      }
    }

    let largestPixelRatio = pixelRatios[pixelRatios.length - 1];
    return sources[largestPixelRatio];
  }

  setNativeProps(nativeProps) {
    this.refs.image.setNativeProps(nativeProps);
  }

  render() {
    let { source } = this.props;
    let optimalSource = ResponsiveImage.getClosestHighQualitySource(this.props.sources);
    if (optimalSource) {
      source = optimalSource;
    }
    if (!source) {
      throw new Error(`Couldn't find an appropriate image source`);
    }

    return <Image {...this.props} ref="image" source={source} />;
  }
}

ResponsiveImage.propTypes = {
  ...Image.propTypes,
  source: PropTypes.shape({
    uri: PropTypes.string,
  }),
  sources: PropTypes.objectOf(Image.propTypes.source),
};

module.exports = ResponsiveImage;