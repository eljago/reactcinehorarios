'use strict';

import config from '../../config'

var ImageHelper = {

	addPrefixToPath(ImagePath, prefix) {
	  var pathArray = ImagePath.split('/');
	  var imgName = pathArray[pathArray.length - 1];
	  pathArray[pathArray.length - 1] = `${prefix}${imgName}`
	  return `${config.URL}${pathArray.join('/')}`;
	}
}


export default ImageHelper;
