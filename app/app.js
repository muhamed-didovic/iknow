'use strict';

// Declare app level module which depends on views, and components
/*angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/

var app = angular.module('myApp', ['gridster']);

app.controller('GridsterCtrl', function($scope) {
    // Define gridster options
    $scope.gridsterOptions = {
        resize: {
            enabled: true
        }
    };

    // Mock widgets
    $scope.values = [
        { num: 1, row: 1, col: 1 },
        { num: 2, row: 1, col: 2 },
        //{ num: 3, row: 1, col: 3 }
    ];
});


app.directive('addable', function() {
    return {
        require: '^gridster',
        scope : {

        },
        link: function(scope, element, attr, controller) {

            element.on('click', function() {alert("###");
                /*console.log($scope.values);
                var item = scope.values.slice(-1).pop();
                var newId = item ? item.num + 1 : 1;
                var newItem =
                {
                    num: newId,
                    row: 1,
                    col: 3
                };
                scope.value.push(newItem);*/

                controller
                    .gridster()
                    .add_widget('<li><button addable>ADD</button><button removable>Remove</button></li>');
                //console.log(scope.values);
            });
        }
    };
});


app.directive('removable', function() {
    return {
        require: '^gridster',
        link: function(scope, element, attr, controller) {
            element.on('click', function() {alert("222")
                // Have to remove the gridster li element
                controller.gridster().remove_widget(element.parents('li'));
            });
        }
    };
});