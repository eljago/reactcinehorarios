'use strict';

var DateHelper = {

	getWeekDates: (startDate) => {
        let date1 = startDate
        let date2 = new Date();
        let date3 = new Date();
        let date4 = new Date();
        let date5 = new Date();
        let date6 = new Date();
        let date7 = new Date();
        date2.setDate(date1.getDate()+1);
        date3.setDate(date1.getDate()+2);
        date4.setDate(date1.getDate()+3);
        date5.setDate(date1.getDate()+4);
        date6.setDate(date1.getDate()+5);
        date7.setDate(date1.getDate()+6);

        return({
        	date1: date1,
        	date2: date2,
        	date3: date3,
        	date4: date4,
        	date5: date5,
        	date6: date6,
        	date7: date7
        });
    },

  getFormattedDate: (date) => {
    let formattedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return formattedDate;
  },


  getShortDateString: (date) => {
    const weekDayNumber = date.getDay();
    const weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
    return `${weekDays[weekDayNumber]}\n${date.getDate()}`;
  }
}


export default DateHelper;
