var setup = function () {
	var express = require('express');
	var app = express();

	var bodyParser = require('body-parser');
	
	app.use(bodyParser.json());
	app.use(express.static('webroot')); 
	
	setup_routes(app);
	
	//setTimeout(exporter, 300);
	
	return app;	
};

var setup_routes = function (app) {

	var pageview = require('../routes/pageview.js');
	pageview(app);
	
	var recom = require('../routes/recom.js');
	recom(app);
};

var exporter = function () {
	var mysql = require('../helpers/mysql.js')
	var r = require('../helpers/r.js');

	r.runChildProcess('rscript.R', function (stream) {

		stream = stream.substr(stream.indexOf('[{'), stream.indexOf('}]')-stream.indexOf('[{')) + '}]';	
		var jstream = JSON.parse(stream);
		
		var c = mysql.createConnection();

		for (var i = 0; i < jstream.length; i++) {
			var srule = jstream[i];

			var rule = {
				rules: srule.rules,
				support: srule.support,
				confidence: srule.confidence,
				lift: srule.lift,
				x1: srule.ruleif.X1 || 0,
				x2: srule.rulethen.X2 || 0,
			};
			
			mysql.executeInsert(c, 'oc_rules', rule);
		}
		
		mysql.closeConnection(c);
		
		console.log('Recommendations! :) ');
	});
}

module.exports = setup;