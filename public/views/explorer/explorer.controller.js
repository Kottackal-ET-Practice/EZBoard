(function()
{
    angular
        .module("PassportApp")
        .controller("ExplorerController", ExplorerController);
    
    function ExplorerController($scope,$http)
    {
    	$scope.loadBalance = loadBalance;
    	function loadBalance()
        {
            $scope.address = "8GhizNyBxT6NWGYxUSfZVADy6hZZj6NSBw";

			$http({
			    url: 'http://chainz.cryptoid.info/slr/api.dws?q=multiaddr&active='+$scope.address+'&n=10&key=79ca5cf51fb2',
			    method: 'GET',
			    dataType: 'json'
			}).success(function (data, status, headers, config) {
			    console.log(data);
			    $scope.response = data;
			});
        }
    }
})();