/**
 * Created by qianmoxie on 3/3/16.
 */
(function(){
    angular.module('onlineApp',['ngRoute']);

    function config ($routeProvider, $locationProvider){
        $routeProvider
            .when('/',{
                templateUrl: '/home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'

            })
            .when('/videos',{
                templateUrl:'/videos/videos.view.html',
                controller: 'videoCtrl',
                controllerAs:'vm'
            })

            .otherwise({redirectTo: '/'});

        $locationProvider.html5Mode(true);
    }

    angular
        .module('onlineApp')
        .config(['$routeProvider','$locationProvider',config]);
})();
