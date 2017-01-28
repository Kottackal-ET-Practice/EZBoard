(function()
{
    angular
        .module("PassportApp")
        .controller("HomeController", HomeController);
    
    function HomeController($scope,$http)
    {
    	$scope.loadBalance = loadBalance;
    	function loadBalance()
        {
            //console.log($scope.data);
            $scope.address = "8Lv6jBL1AZ4Emdeaen8Q7aUp9XrJjChzRo";

			$http({
			    url: 'http://chainz.cryptoid.info/slr/api.dws?q=multiaddr&active='+$scope.address+'&key=79ca5cf51fb2',
			    method: 'GET',
			    dataType: 'json'
			    // data: $scope.data,         
			    // headers: {
			    //     'Content-Type': 'application/json',
			    //     'JsonStub-User-Key': '70085273-d657-4d42-a730-ff42e5776acc',
			    //     'JsonStub-Project-Key': 'd91c9d17-65f5-4277-8fdb-2bf9dfedd1c7'
			    // }
			}).success(function (data, status, headers, config) {
			    console.log(data);
			    $scope.response = data;
			});
        }
    }
})();