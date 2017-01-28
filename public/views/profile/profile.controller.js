(function()
{
    angular
        .module("PassportApp")
        .controller('ProfileCtrl', ProfileCtrl);
    
    function ProfileCtrl($scope,$rootScope,$location,UserService)
    {
        $scope.update = update;

        function update(user)
        {
            UserService
                .updateUser(user._id, user)
                .then(
                    function(response) {
                        $scope.users = response.data;
                        console.log($rootScope.currentUser.flag);
                        if($rootScope.currentUser.flag==true)
                            $location.url("/wallet");
                        else
                            $location.url("/loginhome");
                    },
                    function(err) {
                        $scope.error = err;
                    }
                );
        }
    }
})();
