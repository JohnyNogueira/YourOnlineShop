﻿(function () {
    'use strict';

    /*  var app = angular.module('examples', ['chart.js', 'ui.bootstrap']);*/

    app.config(function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            colours: ['#FF6E40', '#FBC02E', '#673AB7', '#66bd78', '#f05050'],
            responsive: true
        });
        // Configure all doughnut charts
        ChartJsProvider.setOptions('Doughnut', {
            animateScale: true
        });
    });

    app.controller('MenuCtrl', function ($scope) {
        $scope.isCollapsed = true;
        $scope.charts = ['Line', 'Bar', 'Doughnut', 'Pie', 'Polar Area', 'Radar', 'Base'];
    });

    app.controller('LineCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.onHover = function (points) {
            if (points.length > 0) {
                console.log('Point', points[0].value);
            } else {
                console.log('No point');
            }
        };
        $scope.colours = [{ // grey
            fillColor: "rgba(255,110,64,1)",
            strokeColor: "rgba(255,110,64,1)",
            pointColor: "rgba(255,110,64,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(255,110,64,1)"
        }, { // dark grey
            fillColor: "rgba(103,58,183,1)",
            strokeColor: "rgba(103,58,183,1.0)",
            pointColor: "rgba(103,58,183,1.0)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(103,58,183,1.0)"
        }];

        $timeout(function () {
            $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            $scope.data = [
                [28, 48, 40, 19, 86, 27, 90],
                [65, 59, 80, 81, 56, 55, 40]
            ];
            $scope.series = ['Series C', 'Series D'];
        }, 3000);
    }]);

    app.controller('BarCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.options = {
            scaleShowVerticalLines: false
        };
        $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.colours = [{ // grey
            fillColor: "rgba(255,110,64,1)",
            strokeColor: "rgba(255,110,64,1)",
            highlightFill: "rgba(255,110,64,1)",
            highlightStroke: "rgba(255,110,64,1)"
        }, { // dark grey
            fillColor: "rgba(103,58,183,1.0)",
            strokeColor: "rgba(103,58,183,1)",
            highlightFill: "rgba(103,58,183,1)",
            highlightStroke: "rgba(103,58,183,1.0)"
        }];

        $timeout(function () {
            $scope.options = {
                scaleShowVerticalLines: true
            };
        }, 3000);
    }]);

    app.controller('DoughnutCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        $scope.data = [0, 0, 0];
        $scope.colours = [{ // grey
            fillColor: "rgba(255,110,64,1)",
            strokeColor: "rgba(255,110,64,1.0)",
            highlightFill: "rgba(255,110,64,1.0)",
            highlightStroke: "rgba(255,110,64,1)"
        }, { // dark grey
            fillColor: "rgba(103,58,183,1.0)",
            strokeColor: "rgba(103,58,183,1.0)",
            highlightFill: "rgba(103,58,183,1.0)",
            highlightStroke: "rgba(103,58,183,1.0)"
        }, { // dark grey
            fillColor: "rgba(253,216,53,1.0)",
            strokeColor: "rgba(253,216,53,1.0)",
            highlightFill: "rgba(253,216,53,1.0)",
            highlightStroke: "rgba(253,216,53,1.0)"
        }];

        $timeout(function () {
            $scope.data = [350, 450, 100];
        }, 500);
    }]);

    app.controller('PieCtrl', function ($scope) {
        $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        $scope.data = [300, 500, 100];
        $scope.colours = [{ // grey
            fillColor: "rgba(255,110,64,1)",
            strokeColor: "rgba(255,110,64,1.0)",
            highlightFill: "rgba(255,110,64,1.0)",
            highlightStroke: "rgba(255,110,64,1)"
        }, { // dark grey
            fillColor: "rgba(103,58,183,1.0)",
            strokeColor: "rgba(103,58,183,1.0)",
            highlightFill: "rgba(103,58,183,1.0)",
            highlightStroke: "rgba(103,58,183,1.0)"
        }, { // dark grey
            fillColor: "rgba(253,216,53,1.0)",
            strokeColor: "rgba(253,216,53,1.0)",
            highlightFill: "rgba(253,216,53,1.0)",
            highlightStroke: "rgba(253,216,53,1.0)"
        }];
    });

    app.controller('PolarAreaCtrl', function ($scope) {
        $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        $scope.data = [300, 500, 100, 40, 120];
        $scope.colours = [{ // grey
            fillColor: "rgba(255,110,64,1)",
            strokeColor: "rgba(255,110,64,1.0)",
            highlightFill: "rgba(255,110,64,1.0)",
            highlightStroke: "rgba(255,110,64,1)"
        }, { // dark grey
            fillColor: "rgba(103,58,183,1.0)",
            strokeColor: "rgba(103,58,183,1.0)",
            highlightFill: "rgba(103,58,183,1.0)",
            highlightStroke: "rgba(103,58,183,1.0)"
        }, { // dark grey
            fillColor: "rgba(253,216,53,1.0)",
            strokeColor: "rgba(253,216,53,1.0)",
            highlightFill: "rgba(253,216,53,1.0)",
            highlightStroke: "rgba(253,216,53,1.0)"
        }, { // dark grey
            fillColor: "rgba(76,175,80,1.0)",
            strokeColor: "rgba(76,175,80,1.0)",
            highlightFill: "rgba(76,175,80,1.0)",
            highlightStroke: "rgba(76,175,80,1.0)"
        }, { // dark grey
            fillColor: "rgba(244,67,54,1.0)",
            strokeColor: "rgba(244,67,54,1.0)",
            highlightFill: "rgba(244,67,54,1.0)",
            highlightStroke: "rgba(244,67,54,1.0)"
        }];
    });

    app.controller('BaseCtrl', function ($scope) {
        $scope.labels = ['Download Sales', 'Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        $scope.data = [300, 500, 100, 40, 120];
        $scope.type = 'PolarArea';

        $scope.toggle = function () {
            $scope.type = $scope.type === 'PolarArea' ? 'Pie' : 'PolarArea';
        };
        $scope.colours = [{ // grey
            fillColor: "rgba(255,110,64,1)",
            strokeColor: "rgba(255,110,64,1.0)",
            highlightFill: "rgba(255,110,64,1.0)",
            highlightStroke: "rgba(255,110,64,1)"
        }, { // dark grey
            fillColor: "rgba(103,58,183,1.0)",
            strokeColor: "rgba(103,58,183,1.0)",
            highlightFill: "rgba(103,58,183,1.0)",
            highlightStroke: "rgba(103,58,183,1.0)"
        }, { // dark grey
            fillColor: "rgba(253,216,53,1.0)",
            strokeColor: "rgba(253,216,53,1.0)",
            highlightFill: "rgba(253,216,53,1.0)",
            highlightStroke: "rgba(253,216,53,1.0)"
        }, { // dark grey
            fillColor: "rgba(76,175,80,1.0)",
            strokeColor: "rgba(76,175,80,1.0)",
            highlightFill: "rgba(76,175,80,1.0)",
            highlightStroke: "rgba(76,175,80,1.0)"
        }, { // dark grey
            fillColor: "rgba(244,67,54,1.0)",
            strokeColor: "rgba(244,67,54,1.0)",
            highlightFill: "rgba(244,67,54,1.0)",
            highlightStroke: "rgba(244,67,54,1.0)"
        }];
    });

    app.controller('RadarCtrl', function ($scope) {
        $scope.labels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

        $scope.data = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.colours = [{ // grey
            fillColor: "rgba(255,110,64,0.5)",
            strokeColor: "rgba(255,110,64,1)",
            pointColor: "rgba(255,110,64,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(255,110,64,1)"
        }, { // dark grey
            fillColor: "rgba(103,58,183,0.5)",
            strokeColor: "rgba(103,58,183,1.0)",
            pointColor: "rgba(103,58,183,1.0)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(103,58,183,1.0)"
        }];
    });

    app.controller('StackedBarCtrl', function ($scope) {
        $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $scope.type = 'StackedBar';

        $scope.data = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];
    });

    app.controller('DataTablesCtrl', function ($scope) {
        $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.colours = [{ // grey
            fillColor: "rgba(255,110,64,0.5)",
            strokeColor: "rgba(255,110,64,1)",
            pointColor: "rgba(255,110,64,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(255,110,64,1)"
        }, { // dark grey
            fillColor: "rgba(103,58,183,0.5)",
            strokeColor: "rgba(103,58,183,1.0)",
            pointColor: "rgba(103,58,183,1.0)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(103,58,183,1.0)"
        }];
        $scope.randomize = function () {
            $scope.data = $scope.data.map(function (data) {
                return data.map(function (y) {
                    y = y + Math.random() * 10 - 5;
                    return parseInt(y < 0 ? 0 : y > 100 ? 100 : y);
                });
            });
        };
    });

    app.controller('TicksCtrl', ['$scope', '$interval', function ($scope, $interval) {
        var maximum = document.getElementById('container').clientWidth / 2 || 300;
        $scope.data = [
            []
        ];
        $scope.labels = [];
        $scope.options = {
            animation: false,
            showScale: false,
            showTooltips: false,
            pointDot: false,
            datasetStrokeWidth: 0.5
        };

        // Update the dataset at 25FPS for a smoothly-animating chart
        $interval(function () {
            getLiveChartData();
        }, 40);

        function getLiveChartData() {
            if ($scope.data[0].length) {
                $scope.labels = $scope.labels.slice(1);
                $scope.data[0] = $scope.data[0].slice(1);
            }

            while ($scope.data[0].length < maximum) {
                $scope.labels.push('');
                $scope.data[0].push(getRandomValue($scope.data[0]));
            }
        }
    }]);

    function getRandomValue(data) {
        var l = data.length,
            previous = l ? data[l - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        return y < 0 ? 0 : y > 100 ? 100 : y;
    }

})();
