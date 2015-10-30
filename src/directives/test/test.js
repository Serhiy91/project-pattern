angular.module('app')
	.directive('test', [function() {
		return {
			restrict: 'A',
			templateUrl: "directives/test/test.html",
			scope: {},
			link: function($scope) {
			}
		}
	}]);
