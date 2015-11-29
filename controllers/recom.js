var rhelper = require('../helpers/r.js');
var mysql = require('../helpers/mysql.js');

var recom = {
	
	getProductRecom: function (req, res) {
		
		var sql = 'select x2 from oc_rules where x1 like \'%{pid}%\''
			.replace('{pid}', req.params.id);
			
		mysql.executeQuery(sql, function (data) {
			var str = '';
			for (var i = 0; i < data.length; i++) {
				str += ',' + data[i].x2
					.replace('{', '')
					.replace('}', '')
					.trim();
			}
			var response = str.replace(',', '').split(',');
			response = getUniqueItems(response);
			res.status(200).send(response);
		});
	},
};

var getUniqueItems = function (arr) {
	var u = {}, a = [];
	for (var i = 0, l = arr.length; i < l; ++i) {
		if (u.hasOwnProperty(arr[i])) {
			continue;
		}
		a.push(arr[i]);
		u[arr[i]] = 1;
	}
	return a;
};

module.exports = recom;