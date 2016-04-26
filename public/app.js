//With Angular 1.3+ you can no longer use global controller declaration on the global scope(Without explicit registration).
// You would need to register the controller using module.controller syntax.
var app = angular.module('myapp', ['ui.router','oc.lazyLoad']);

app.config(function($stateProvider, $urlRouterProvider,$ocLazyLoadProvider) {


    $ocLazyLoadProvider.config({
        debug:false,
        events:true,
    });
    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATE  ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })


        // Table with custom controller
        .state('table', {
            url: '/table',
            templateUrl: 'table.html',
            controller: function($scope,$http) {
                $http.get("/food1").then(function (response) {
                    $scope.foods2 = response.data;


                })
            }

        })


        // nested list with custom controller
        .state('1', {
            url: '/1',
            templateUrl: '1.html',
            controller: function($scope,$http) {
                $http.get("/food1").then(function (response) {
                    $scope.foods2 = response.data;
                    console.log("inside1");
            })
            }


        })

        .state('2', {
            url: '/2',
            templateUrl: '2.html',
            controller: function($scope,$http) {
                $http.get("/food2").then(function (response) {
                    $scope.foods2 = response.data;
                })
            }

        })

        .state('3', {
            url: '/3',
            templateUrl: '3.html',
            controller: function($scope,$http) {
                $http.get("/food3").then(function (response) {
                    $scope.foods2 = response.data;
                })
            }

        })


        .state('4', {
            url: '/4',
            templateUrl: '4.html',
            controller: function($scope,$http) {
                $http.get("/food4").then(function (response) {
                    $scope.foods2 = response.data;
                })
        }

    })

        .state('5', {
            url: '/5',
            templateUrl: '5.html',
            controller: function($scope,$http) {
                $http.get("/food5").then(function (response) {
                    $scope.foods2 = response.data;
                })
            }

        })




        // Chart with custom controller
 .state('chart', {
        url: '/chart',
        templateUrl: 'chart.html',
        controller: function($scope,$http,$timeout) {
            $http.get("/food2").then(function (response) {
                $scope.countries = [];
                $scope.obmen = [];
                for(i=0;i<response.data.length;i++)
                {
                    $scope.content = response.data[i];
                    $scope.countries.push($scope.content.Countries);

                    $scope.obmen.push($scope.content["Obesity prevalence, men (%)"]);

                }
                for(k=0;k<$scope.countries.length;k++)
                {
                    console.log($scope.countries[k]);
                }
                for(j=0;j<$scope.obmen.length;j++)
                {
                    console.log($scope.obmen[j]);
                }
               /* $scope.bar = {
                    labels: $scope.countries,
                    series: ['Series A'],

                    data: $scope.obmen



                };*/
               $scope.bar = {
                    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
                    series: ['Series A', 'Series B'],

                    data: [
                        [65, 59, 80, 81, 56, 55, 40],
                        [28, 48, 40, 19, 86, 27, 90]
                    ]

                };
                $scope.donut = {
                    labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
                    data: [300, 500, 100]
                };

            })
        }

    });


/*
        .state('chart',{
            templateUrl:'chart.html',
            url:'/chart',
            controller:'ChartCtrl',
           resolve: {
                loadMyFile:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:'angular-chart.js',
                        files:[
                            'node_modules/angular-chart/angular-chart.min.js',
                            'node_modules/angular-chart/angular-chart.min.css',

                        ]
                    }),
                        $ocLazyLoad.load({
                            name:'myapp',
                            files:['chartContoller.js']
                        })
                }
            }
        })
*/
});

