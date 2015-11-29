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

	if (!req.body) {
		var items = req.body.transaction_items.split(',');

		for (var i = 0; i < items.length; i++) {
			var pageview = {
				client_id: req.body.client_id,
				transaction_id: req.body.transaction_id,
				store_id: req.body.store_id,
				transaction_type: req.body.transaction_type,
				item: items[i]
			};

			mysql.executeInsert('oc_transactions', pageview);
		}
	}

	res.status(201).send();
};

var getTopBestSellers = function (req, res) {
	var qtd = req.params.qtd || 10;
	
	var sql = 'select t.item, count(t.item) as qtd ' +
		'from oc_transactions t ' +
		'group by t.item ' +
		'order by qtd desc, t.item asc ' +
		'limit {qtd}'
			.replace('{qtd}', qtd);
		
		mysql.executeQuery(sql, function (data) {
		
			var result = new Array(data.length);
			for (var i = 0; i < data.length; i++){
				result[i] = [data[i].item, data[i].qtd];
			}
			
		res.status(200).send(result);
	});
};

var pageview = {
	getPageView: getPageView,
	
	getTopBestSellers: getTopBestSellers,
	
	addHit: addHit
};

module.exports = pageview;