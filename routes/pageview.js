var pageview = function (app) { 
	var controller = require('../controllers/pageview.js');
	
	app.get('/pageview/:id', controller.getPageView);
	
	app.post('/pageview', controller.addHit);
};

module.exports = pageview;