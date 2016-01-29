module.exports = function (config) {
    config.set({
        files: [
            'src/**/*.spec.js'
        ],
        exclude: [],
        frameworks: ['browserify', 'jasmine', 'source-map-support'],
        preprocessors: {
            'src/**/*.spec.js': ['browserify']
        },
        browserify: {
            debug: true
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO, // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        browsers: ['Chrome']
    });
};