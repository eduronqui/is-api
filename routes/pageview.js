var pageview = function (app) { 
	var controller = require('../controllers/pageview.js');
	
	app.get('/pageview/:id', controller.getPageView);
};

module.exports = pageview;