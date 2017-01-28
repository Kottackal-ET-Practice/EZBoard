(function()
{
    angular
        .module("PassportApp")
        .controller("LoginCtrl", LoginCtrl);
    
    function LoginCtrl($scope, $location, $rootScope, UserService)
    {
        $scope.login = login;

        function login(user)
        {
            if(user)
            UserService
                .login(user)
                .then(
                    function(response)
                    {
                        $rootScope.currentUser = response.data;
                        if(response.data.flag==true)
                            $location.url("/profile");
                        else
                            $location.url("/loginhome");
                    },
                    function(err) {
                        //$scope.error = err.data;
                        if(err.data=="Unauthorized")
                            $scope.error = "Invalid username/ password"
                    }
                );
        }
    }
  
})();
