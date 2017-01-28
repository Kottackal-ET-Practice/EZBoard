(function()
{
    angular
        .module("PassportApp")
        .controller("WalletController", WalletController);
    
    function WalletController($scope,$location)
    {
    	$scope.redirect = redirect;

        function redirect(user)
        {
            $location.url("/data");
        }
    }
})();