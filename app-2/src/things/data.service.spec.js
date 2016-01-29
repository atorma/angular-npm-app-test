var _ = require('lodash');
var angular = require('angular');
require('angular-mocks/ngMock');
require('./module');

describe('data service', function() {

    var thingsDataService;
    var $scope;

    beforeEach(angular.mock.module('things'));

    beforeEach(angular.mock.inject(function(_thingsDataService_, $rootScope) {
        thingsDataService = _thingsDataService_;
        $scope = $rootScope;
    }));



    it('finds list of things', function() {
        var allThings = [];
        thingsDataService.findAll()
            .then(function(data) {
                allThings = data;
            });
        $scope.$digest();

        expect(allThings.length).toBeGreaterThan(0);
    });

    it('finds thing by id', function() {
        var allThings = [];
        thingsDataService.findAll()
            .then(function(data) {
                allThings = data;
            });
        $scope.$digest();

        var someThing = allThings[0];

        var foundById = undefined;
        thingsDataService.findById(someThing.id)
            .then(function(data) {
                foundById = data;
            });
        $scope.$digest();

        expect(foundById).toEqual(someThing);
    });
});