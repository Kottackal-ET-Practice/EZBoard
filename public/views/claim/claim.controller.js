(function()
{
    angular
        .module("PassportApp")
        .controller("ClaimController", ClaimController);
    
    function ClaimController($scope,$http)
    {
    	$scope.claim = claim;
    	function claim()
        {
            $scope.data = {"firstName": "Ajith","lastName": "Raj Menon","email": "kottackalajith@gmail.com","projects": [{"address": "Ambalapatt House","city": "Thrissur","state": "Kerala","zipCode": "680584","country": "India","nameplate": 2,"installDate": "2017-1-18","walletAddress": "8RGHx2j8cMAo2CnKQ3e4kBaPcT6uAcx8yz","documentation": "http://www.photovoltaic-producer.com/legal/paperwork/license.pdf","deviceID": "549d138b-410c-4b98-8dfb-adfe36e7a192"}],"bounty": {"email": "kottackaljacob@gmail.com","walletAddress": "8WNnbzFGT3TBzku87tWb4PRZT8i12u3"}};
			console.log($scope.data);
			$http({
			    url: 'http://api.solarcoin.org:8080/claim',
			    method: 'POST',
			    dataType: 'json', 
			    data: $scope.data,         
			    headers: {
			        'Content-Type': 'application/json',
			        'Accept': 'application/json',
			        'Authorization': 'Basic SnFJdFNrRXdsd1MzaFg1MU9oQWNMbHE6'
			    }
			}).success(function (data, status, headers, config) {
			    console.log(data);
			    $scope.response = data;
			});
        }
    }
})();		