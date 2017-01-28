(function(){
    angular
        .module("PassportApp")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            login: login,
            logout: logout,
            register: register,
            findAllUsers: findAllUsers,
            deleteUser: deleteUser,
            updateUser: updateUser,
            createUser: createUser,
            dataadd : dataadd
        };
        return api;

        function logout() {
            return $http.post("/api/logout");
        }

        function createUser(user) {
            return $http.post('/api/user', user);
        }

        function updateUser(userId, user) {
            return $http.put('/api/user/'+userId, user);
        }

        function deleteUser(userId) {
            return $http.delete('/api/user/'+userId);
        }

        function findAllUsers() {
            return $http.get("/api/user");
        }

        function register(user) {
            return $http.post("/api/register", user);
        }

        function dataadd(data) {
            return $http.post("/api/add_data", data);
        }

        function login(user) {
            return $http.post("/api/login", user);
        }
    }
})();