var recom = function (app) {
	var controller = require('../controllers/recom.js');
	
	app.get('/recom/pid/:id', controller.getProductRecom);
	
	app.get('/recom/cid/:id', controller.getCustomerRecom);
};

module.exports = recom;