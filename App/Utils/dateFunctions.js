'use strict';

var dateFunctions = {
	toYYYYMMDD: function(date) {
		var yyyy = date.getFullYear();
		var mm = date.getMonth()+1;
		var dd = date.getDate();
		return `${yyyy}-${mm}-${dd}`;
	}
}

module.exports = dateFunctions;
