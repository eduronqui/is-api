var mysql = require('../helpers/mysql.js');

var getPageView = function (req, res) {
	mysql.executeQuery('select * from t_dummy', function (data) {
		
		for (var i = 0; i < data.length; i++){
			var row = data[i];
			console.log('chave: ' + row.chave);
			console.log('valor: ' + row.valor);
		}
		
		res.status(200).send(req.params.id);
	});
};

var addHit = function (req, res) {
	
	var pageview = {
		client_id: req.body.client_id,
		store_id: req.body.store_id,
		transaction_type: req.body.transaction_type,
		transaction_items: req.body.transaction_items
	};
	
	mysql.executeInsert('oc_transactions', pageview);
	
	res.status(201).send();
};

var pageview = {
	getPageView: getPageView,
	
	addHit: addHit
};

module.exports = pageview;