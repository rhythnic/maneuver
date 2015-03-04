var stylus = require('stylus'),
    nib = require('nib'),
    path = require('path');

module.exports = function (opts) {
  var implicit = (opts && opts.implicit == false) ? false : true;

  return function (style) {
    style.use(nib());
    style.include(__dirname);

    if (implicit) {
      style.import('nib');
      style.import('shift');
    }
  };

};

/** Library version. */
module.exports.version = require(path.join(__dirname, 'package.json')).version;

/** Stylus path. */
module.exports.path = __dirname;