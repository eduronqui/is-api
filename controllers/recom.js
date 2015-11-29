var rhelper = require('../helpers/r.js');

var recom = {
	
	getProductRecom: function (req, res) {
		rhelper.runChildProcess('rscript.r', function (stream) {
			// TODO processar stream
			res.status(200).send('OK');
		});
	},
	
	getCustomerRecom: function (req, res) {
		
		rhelper.runChildProcess('recom01.r', function (stream) {
			// TODO processar stream
			res.status(200).send('OK');
		});
	}
};

module.exports = recom;