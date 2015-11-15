'use strict';

var imageHelper = {

	getThumbImage(relativeImagePath) {
	  var pathArray = relativeImagePath.split('/');
	  var imgName = pathArray[pathArray.length - 1];
	  pathArray[pathArray.length - 1] = `smaller_${imgName}`
	  return pathArray.join('/');
	}
}


module.exports = imageHelper;
