var setup = function (app) {
	
	setup_routes(app);	
};

var setup_routes = function (app) {

	var pageview = require('../routes/pageview.js');
	pageview(app);
};

module.exports = setup;