'use strict';

var path = require('path');
var root = path.resolve(path.join(__dirname, '../../'));
// var sass = require(root + '/public/js/vendor/node-sass');
var sass = require('node-sass');

module.exports = function (source) {
  return new Promise(function (resolve) {

    console.log('Testing\n\n\n');

    try {
      console.log(source.source);
      var response = sass.renderSync( {data: source.source} );
      console.log(response.css.toString());
      resolve({ errors: null, result: response.css.toString() });

    } catch (e) {
      var errors = {
        msg: e.message
      };
      resolve({
        errors: [errors],
        result: null
      });
    }
  });
};
