"use strict";

var browserify = require('browserify');
var watchify = require('watchify');
var _ = require('lodash');
var path = require('join-path');
var glob = require('glob');

var config = require('./config');

var libs = ['angular', 'angular-ui-router', 'lodash'];

module.exports = {
    forLibs: forLibs,
    forApp: forApp,
    forMockApp: forMockApp
};

function forLibs(browserifyOpts) {
    return createBundler(browserifyOpts).require(libs);
}

function forApp(browserifyOpts) {
    return createBundler(browserifyOpts)
        .add(config.paths.appSourceMain)
        .external(libs);
}

function forMockApp(browserifyOpts) {
    var mockFilePaths = _.chain(config.modules)
        .map(function(modulePath) {
            return glob.sync(path('node_modules', modulePath, '**/*.mock.js'));
        })
        .flatten()
        .value();

    var bundler = forApp(browserifyOpts);
    _.each(mockFilePaths, function(filePath) {
        bundler.add(filePath);
    });

    return bundler;
}

function createBundler(additionalOpts) {
    var opts = _.extend({}, additionalOpts, watchify.args);
    return browserify(opts);
}

