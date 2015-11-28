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
		chave: req.body.chave,
		valor: req.body.valor
	};
	
	mysql.executeInsert('t_dummy', pageview);
	
	res.status(201)
		.send(JSON.stringify(pageview));
};

var pageview = {
	getPageView: getPageView,
	
	addHit: addHit
};

module.exports = pageview;