'use strict';

module.exports = {
	width: 280,
	height: 180,

	getSourceURL: function(code) {
		return `http://www.youtube.com/embed/${code}?autoplay=1`
	},

	getIframe: function(title, subtitle, code) {
		return `<div class=\"video\">\
	              <h3>${title}</h3>\
	              <h4>${subtitle}</h4>\
	              <iframe 
	              	width=\"${this.width}\" 
	              	height=\"${this.height}\" 
	              	src=\"${this.getSourceURL(code)}\" 
	              	frameBorder=\"0\"
	              	allowfullscreen>\
	              </iframe>\
	              </div>`
	},

	getHtml: function(title, subtitle, code) {
		return `<!DOCTYPE html>\
	               <html><head>\
	               <title>Videos</title>\
	               <style type=\"text/css\">\
	               body {\
	               background-color: rgb(241, 234, 227);\
	               margin: 0px;\
	               padding: 0px;\
	               }\
	               h3 {\
	               font-family: \"Helvetica Neue\";\
	               font-weight: normal;\
	               color: rgb(168, 56, 48);\
	               margin-top: 0;\
	               margin-bottom: 5px;\
	               }\
	               h4 {\
	               font-family: \"Helvetica Neue\";\
	               font-weight: normal;\
	               margin-top: 0;\
	               margin-bottom: 10px;\
	               }\
	               div.video {\
	               background-color: white;\
	               margin: 10px;\
	               padding: 10px;\
	               padding-bottom: 7px;\
	               -moz-border-radius: 3px;\
	               border-radius: 3px;\
	               box-shadow: 0 0 10px #888888;\
	               }\
	               iframe { margin: 0; }\
	               </style>\
	               </head><body>${this.getIframe(title, subtitle, code)}</body></html>`
	}
}