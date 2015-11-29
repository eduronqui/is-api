var mysql = require('../helpers/mysql.js');

var addHit = function (req, res) {

	if (req.body) {
		var items = req.body.transaction_items;

		var today = new Date()
		
		var c = mysql.createConnection();
		
		for (var i = 0; i < items.length; i++) {
			var pageview = {
				client_id: req.body.client_id,
				transaction_id: req.body.transaction_id,
				store_id: req.body.store_id,
				transaction_type: req.body.transaction_type,
				transaction_items: items[i].id,
				product_name: items[i].name,
				order_date: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate()
			};

			mysql.executeInsert(c, 'oc_transactions', pageview);
		}
		mysql.closeConnection(c);
	}

	res.status(201).send();
};

var getTopBestSellers = function (req, res) {
	var qtd = req.params.qtd || 10;
	
	var sql = 'select t.id, t.client_id, store_id, t.product_name, count(t.transaction_items) as total, t.transaction_type as qtd ' +
	'from oc_transactions t ' +
	'group by t.client_id ' +
	'order by t.client_id desc ' +
	'limit {qtd}'
	.replace('{qtd}', qtd);
	
	mysql.executeQuery(sql, function (data) {
		res.status(200).send(data);
	});
};

var getRecomendations = function(req, res){
 var sql = 'SELECT id_oc_rules, rules, support, confidence, lift, X1, X2, store_id ' + 
 'FROM oc_rules';

 mysql.executeQuery(sql, function (data){
  res.status(200).send(data);
 });
};

var pageview = {
	getTopBestSellers: getTopBestSellers,

	addHit: addHit,

	getRecomendations: getRecomendations
};

module.exports = pageview;