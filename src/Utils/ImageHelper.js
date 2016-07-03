'use strict';

import config from '../config'

var ImageHelper = {

	addPrefixToPath(imagePath, prefix = '') {
	  var pathArray = imagePath.split('/');
	  var imgName = pathArray[pathArray.length - 1];
	  pathArray[pathArray.length - 1] = `${prefix}${imgName}`
	  return `http://cinehorarios.cl${pathArray.join('/')}`;
	}
}


export default ImageHelper;
