app.controller('HomeCtrl', function($rootScope, $location, $http)
{
	$rootScope.activetab = $location.path();

	$rootScope.typeTransition = [];

//	var transitions = function() {
	$http.get('http://localhost:3000/pageview/top/50').success(function (data) {
		$rootScope.typeTransition = data;
	}).error(function (data, status) {
		$rootScope.message = "Erro em alguma coisa que eu nao faço ideia O.o" + " " + data + " " + status;
	});
//	}

});

app.controller('SobreCtrl', function($rootScope, $location)
{
	$rootScope.activetab = $location.path();
});

app.controller('ContatoCtrl', function($rootScope, $location)
{
	$rootScope.activetab = $location.path();
});