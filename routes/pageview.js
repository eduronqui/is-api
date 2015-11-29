var pageview = function (app) { 
	var controller = require('../controllers/pageview.js');

	app.post('/pageview', controller.addHit);
	
	app.get('/pageview/top/:qtd', controller.getTopBestSellers);
	
	app.get('/pageview/recomendation', controller.getRecomendations);
};

module.exports = pageview;