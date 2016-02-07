'use strict';

var dateFunctions = {

	toYYYYMMDD: function(date) {
		var yyyy = date.getFullYear();
		var mm = date.getMonth()+1;
		var dd = date.getDate();
		return `${yyyy}-${mm}-${dd}`;
	},

	getWeekDates: () => {
		let dates = [];
		for (let i = 0; i < 7; i++) {
			let date = new Date();
			date.setDate(date.getDate()+i);
			dates.push(date);
		}
	    return dates;
	},

	getDateString: (date) => {
	  var weekDayNumber = date.getDay();
	  var weekDays = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
	  return `${weekDays[weekDayNumber]}`;
	}
}

module.exports = dateFunctions;