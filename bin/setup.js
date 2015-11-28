var setup = function () {
	var express = require('express');
	var app = express();

	var bodyParser = require('body-parser');
	
	app.use(bodyParser.json());
	
	setup_routes(app);
	
	return app;	
};

var setup_routes = function (app) {

	var pageview = require('../routes/pageview.js');
	pageview(app);
	
	var recom = require('../routes/recom.js');
	recom(app);
};

module.exports = setup;