
var getPageView = function (req, res) {
	res.status(200).send(req.params.id);
};

var addHit = function (req, res) {
	
	var pageview = {
		userId: req.body.usr,
		productId: req.body.pid
	};
	
	res.status(201)
		.send(JSON.stringify(pageview));
};

var pageview = {

	getPageView: getPageView,
	
	addHit: addHit,
};


module.exports = pageview;