// Karma configuration
// Generated on Mon Dec 19 2016 15:11:11 GMT-0600 (CST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './bower_components/angular/angular.js',
      './bower_components/jquery/dist/jquery.js',

      './bower_components/angular-animate/angular-animate.js',
      './bower_components/angular-bootstrap/ui-bootstrap.js',
      './bower_components/angular-ui-sortable/sortable.js',
      './bower_components/angular-ui-select/dist/select.js',
      './bower_components/angular-ui-router/release/angular-ui-router.js',
      './bower_components/angular-touch/angular-touch.js',
      './bower_components/angular-toastr/dist/angular-toastr.js',
      './bower_components/angular-smart-table/dist/smart-table.js',
      './bower_components/angular-xeditable/dist/js/xeditable.js',
      './bower_components/angular-slimscroll/angular-slimscroll.js',
      './bower_components/angular-progress-button-styles/dist/angular-progress-button-styles.js',
      './bower_components/textAngular/dist/textAngular-sanitize.js',
      './bower_components/chart.js/dist/Chart.bundle.js',
      './bower_components/chart.js/dist/Chart.js',

      './node_modules/angular-mocks/angular-mocks.js',
      './src/app/app.js',
      './src/app/pages/pages.module.js',
      './src/app/pages/business/business.module.js',
      './src/app/pages/business/BusinessController.list.js',
      './src/app/pages/business/BusinessController.view.js',
      './src/app/theme/theme.module.js',

      './src/app/pages/business/business.module.js',
      './src/app/pages/form/form.module.js',
      './src/app/pages/ui/**/*.module.js',
      './src/app/theme/theme.module.js',
      './src/app/theme/components/components.module.js',
      './src/app/theme/inputs/inputs.module.js',

      './src/app/services/BusinessService.js',
      './src/test/controllers/BusinessController.list.spec.js',
      './src/test/controllers/BusinessController.view.spec.js',
      './src/test/services/BusinessService.spec.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/app/pages/business/*.js': ['coverage'],
      'src/app/services/*Service.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
