var pageview = function (app) { 
	var controller = require('../controllers/pageview.js');
	
	app.get('/pageview/:id', controller.getPageView);
	
	app.post('/pageview', controller.addHit);
	
	app.get('/pageview/top/:qtd', controller.getTopBestSellers);
};

module.exports = pageview;