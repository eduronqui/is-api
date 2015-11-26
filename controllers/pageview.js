
var getPageView = function (req, res) {
	res.status(200).send(req.params.id);
};

var pageview = {

	getPageView: getPageView
};


module.exports = pageview;