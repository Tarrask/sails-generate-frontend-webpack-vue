/**
 * sails-generate-frontend
 *
 * Usage:
 * `sails generate frontend`
 *
 * @type {Dictionary}
 */

module.exports = {

  templatesDirectory: require('path').resolve(__dirname,'./templates'),

  /**
   * The targets to generate.
   * @type {Dictionary}
   */
  targets: {
    './webpack/config/index.js': { copy: { templatePath: 'webpack/config/index.js', force: true} },
    './config/routes.js': { copy: { templatePath: 'config/routes.js', force: true} },
    './config/webpack.js': { copy: { templatePath: 'config/webpack.js' } }

    // Call sails.io.js sub-generator to create the browser sdk at the conventional location
    // (in `assets/js/dependencies/sails.io.js`)
    //'./':                            ['sails.io.js'],

    // Example for folks creating custom front-end generators:
    // > (i.e. how to inject other client-side dependencies)
    // ====================================================================================
    // './assets/js/dependencies/angular.min.js': { exec: function (scope, cb) {
    //    if (scope.frontend !== 'angular') return cb();
    //    var src = require('path').resolve(__dirname,'../templates/assets/js/dependencies/angular.min.js');
    //    require('fs-extra').copy(src, scope.rootPath, cb);
    // } },
    // ====================================================================================

  }
};

