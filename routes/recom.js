var recom = function (app) {
	var controller = require('../controllers/recom.js');
	
	app.get('/recom/pid/:id', controller.getProductRecom);
};

module.exports = recom;