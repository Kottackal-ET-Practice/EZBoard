	(function()
{
    angular
        .module("PassportApp")
        .controller("DataCtrl", DataCtrl);
        
    function DataCtrl($scope, $location, $rootScope, UserService)
    {
        $scope.adddata = adddata;

        function adddata(data)
        {
            	$scope.load = {};
            	$scope.load.username = $rootScope.currentUser.username;
            	$scope.load.data = data;
                UserService
                    .dataadd($scope.load)
                    .then(
                        function(response) {
                            var user = response.data;
                            if(user != null) {
                            	console.log(user.data.projects[0]);
                                // $rootScope.currentUser = user.data.projects[0];

                                $scope.user = $rootScope.currentUser;
				                $scope.user.flag = false;
				                console.log($scope.user);

				                UserService
				                .updateUser($scope.user._id, $scope.user)
				                .then(
				                    function(response) {
				                        $scope.users = response.data;
				                    },
				                    function(err) {
				                        $scope.error = err;
				                    }
				                );

                                $location.url("/loginhome");
                            }
                        },
                        function(err) {
                            $scope.error = err.data;
                        }
                    );

        }
    }
})();
