var gulp = require('gulp');
var karma = require('karma');


gulp.task('test', function (cb) {
    var server = new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        logLevel: "INFO",
        singleRun: true
    }, function(exitStatus) {
        cb(exitStatus ? "There are failing unit tests" : undefined);
    });
    server.start();
});

gulp.task('tdd', function (cb) {
    new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        logLevel: "INFO",
        singleRun: false
    }, cb).start();
});