angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller(
        'TypeaheadCtrl', function($scope, $http) {

    $scope.selected = undefined;
    $scope.fruits = [
            'Apple', 'Banana', 'Cherry',
            'Durian', 'Elderberry', 'Fig',
            'Grape', 'Huckleberry'];
});


